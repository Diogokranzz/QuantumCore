# ===== QUANTUMCORE - SISTEMA DE INTELIGÊNCIA QUÂNTICA =====

import os
import json
import sqlite3
import numpy as np
import pandas as pd
from datetime import datetime, timedelta
from flask import Flask, render_template, request, jsonify, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler
import joblib
import threading
import time

# ===== CONFIGURAÇÃO DA APLICAÇÃO =====
app = Flask(__name__)
app.secret_key = 'quantum_core_secret_key_2025'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///quantum_core.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ===== MODELOS DE DADOS QUÂNTICOS =====
class QuantumData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    energy_level = db.Column(db.Float, nullable=False)
    quantum_state = db.Column(db.String(50), nullable=False)
    entropy_value = db.Column(db.Float, nullable=False)
    coherence_time = db.Column(db.Float, nullable=False)
    decoherence_rate = db.Column(db.Float, nullable=False)
    superposition_quality = db.Column(db.Float, nullable=False)
    
    def to_dict(self):
        return {
            'id': self.id,
            'timestamp': self.timestamp.isoformat(),
            'energy_level': self.energy_level,
            'quantum_state': self.quantum_state,
            'entropy_value': self.entropy_value,
            'coherence_time': self.coherence_time,
            'decoherence_rate': self.decoherence_rate,
            'superposition_quality': self.superposition_quality
        }

class QuantumPrediction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    predicted_energy = db.Column(db.Float, nullable=False)
    predicted_entropy = db.Column(db.Float, nullable=False)
    confidence_level = db.Column(db.Float, nullable=False)
    prediction_horizon = db.Column(db.Integer, nullable=False)  # horas
    
    def to_dict(self):
        return {
            'id': self.id,
            'timestamp': self.timestamp.isoformat(),
            'predicted_energy': self.predicted_energy,
            'predicted_entropy': self.predicted_entropy,
            'confidence_level': self.confidence_level,
            'prediction_horizon': self.prediction_horizon
        }

# ===== SISTEMA DE IA QUÂNTICA =====
class QuantumAI:
    def __init__(self):
        self.model = RandomForestRegressor(n_estimators=100, random_state=42)
        self.scaler = StandardScaler()
        self.is_trained = False
        self.last_training = None
        
    def prepare_data(self):
        """Prepara dados para treinamento da IA"""
        data = QuantumData.query.order_by(QuantumData.timestamp.desc()).limit(1000).all()
        if len(data) < 50:
            return None, None
            
        df = pd.DataFrame([d.to_dict() for d in data])
        df['timestamp'] = pd.to_datetime(df['timestamp'])
        df['hour'] = df['timestamp'].dt.hour
        df['day_of_week'] = df['timestamp'].dt.dayofweek
        
        # Features para o modelo
        features = ['energy_level', 'entropy_value', 'coherence_time', 
                   'decoherence_rate', 'superposition_quality', 'hour', 'day_of_week']
        
        X = df[features].values
        y_energy = df['energy_level'].values
        y_entropy = df['entropy_value'].values
        
        return X, y_energy, y_entropy
    
    def train(self):
        """Treina o modelo de IA"""
        X, y_energy, y_entropy = self.prepare_data()
        if X is None:
            return False
            
        try:
            X_scaled = self.scaler.fit_transform(X)
            self.model.fit(X_scaled, y_energy)
            self.is_trained = True
            self.last_training = datetime.utcnow()
            return True
        except Exception as e:
            print(f"Erro no treinamento: {e}")
            return False
    
    def predict(self, hours_ahead=24):
        """Faz previsões quânticas"""
        if not self.is_trained:
            return None
            
        try:
            # Gera dados futuros para previsão
            future_data = []
            current_time = datetime.utcnow()
            
            for i in range(hours_ahead):
                future_time = current_time + timedelta(hours=i)
                # Usa valores médios como base
                sample_data = [
                    50.0,  # energy_level
                    0.5,   # entropy_value
                    100.0, # coherence_time
                    0.1,   # decoherence_rate
                    0.8,   # superposition_quality
                    future_time.hour,
                    future_time.weekday()
                ]
                future_data.append(sample_data)
            
            X_future = np.array(future_data)
            X_future_scaled = self.scaler.transform(X_future)
            
            predictions = self.model.predict(X_future_scaled)
            return predictions.tolist()
            
        except Exception as e:
            print(f"Erro na previsão: {e}")
            return None

# ===== INICIALIZAÇÃO =====
quantum_ai = QuantumAI()

def init_database():
    """Inicializa o banco de dados com dados quânticos simulados"""
    db.create_all()
    
    # Verifica se já existem dados
    if QuantumData.query.count() == 0:
        print("Inicializando banco de dados com dados quânticos...")
        
        # Gera dados quânticos simulados
        for i in range(168):  # 7 dias de dados
            timestamp = datetime.utcnow() - timedelta(hours=i)
            
            # Simula dados quânticos realistas
            energy_level = 40 + 20 * np.sin(i * 0.1) + np.random.normal(0, 5)
            entropy_value = 0.3 + 0.4 * np.sin(i * 0.15) + np.random.normal(0, 0.1)
            coherence_time = 80 + 40 * np.sin(i * 0.12) + np.random.normal(0, 10)
            decoherence_rate = 0.05 + 0.1 * np.sin(i * 0.08) + np.random.normal(0, 0.02)
            superposition_quality = 0.7 + 0.2 * np.sin(i * 0.2) + np.random.normal(0, 0.05)
            
            quantum_states = ['|0⟩', '|1⟩', '|+⟩', '|-⟩', '|ψ⟩']
            quantum_state = np.random.choice(quantum_states)
            
            data = QuantumData(
                timestamp=timestamp,
                energy_level=max(0, energy_level),
                quantum_state=quantum_state,
                entropy_value=max(0, min(1, entropy_value)),
                coherence_time=max(0, coherence_time),
                decoherence_rate=max(0, decoherence_rate),
                superposition_quality=max(0, min(1, superposition_quality))
            )
            db.session.add(data)
        
        db.session.commit()
        print("Dados quânticos inicializados!")

# ===== ROTAS PRINCIPAIS =====
@app.route('/')
def index():
    """Página inicial do QuantumCore"""
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    """Dashboard principal com visualizações quânticas"""
    # Busca dados recentes
    recent_data = QuantumData.query.order_by(QuantumData.timestamp.desc()).limit(24).all()
    recent_data.reverse()  # Ordem cronológica
    
    # Prepara dados para o gráfico
    labels = [d.timestamp.strftime('%H:%M') for d in recent_data]
    energy_data = [d.energy_level for d in recent_data]
    entropy_data = [d.entropy_value for d in recent_data]
    coherence_data = [d.coherence_time for d in recent_data]
    
    # Faz previsões se o modelo estiver treinado
    predictions = None
    if quantum_ai.is_trained:
        predictions = quantum_ai.predict(24)
    
    return render_template('dashboard.html',
                         labels=labels,
                         energy_data=energy_data,
                         entropy_data=entropy_data,
                         coherence_data=coherence_data,
                         predictions=predictions)

@app.route('/quantum-lab')
def quantum_lab():
    """Laboratório quântico para experimentos"""
    return render_template('quantum_lab.html')

@app.route('/api/quantum-data', methods=['GET'])
def get_quantum_data():
    """API para obter dados quânticos"""
    limit = request.args.get('limit', 100, type=int)
    data = QuantumData.query.order_by(QuantumData.timestamp.desc()).limit(limit).all()
    return jsonify([d.to_dict() for d in data])

@app.route('/api/add-quantum-data', methods=['POST'])
def add_quantum_data():
    """API para adicionar novos dados quânticos"""
    try:
        data = request.json
        new_data = QuantumData(
            energy_level=float(data['energy_level']),
            quantum_state=data['quantum_state'],
            entropy_value=float(data['entropy_value']),
            coherence_time=float(data['coherence_time']),
            decoherence_rate=float(data['decoherence_rate']),
            superposition_quality=float(data['superposition_quality'])
        )
        db.session.add(new_data)
        db.session.commit()
        return jsonify({'success': True, 'message': 'Dados quânticos adicionados'})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

@app.route('/api/train-ai', methods=['POST'])
def train_ai():
    """API para treinar a IA quântica"""
    success = quantum_ai.train()
    return jsonify({'success': success, 'message': 'IA treinada com sucesso' if success else 'Erro no treinamento'})

@app.route('/api/predict', methods=['GET'])
def get_predictions():
    """API para obter previsões quânticas"""
    hours = request.args.get('hours', 24, type=int)
    predictions = quantum_ai.predict(hours)
    return jsonify({'predictions': predictions})

# ===== INICIALIZAÇÃO AUTOMÁTICA =====
with app.app_context():
    init_database()
    # Treina a IA na inicialização
    quantum_ai.train()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000) 