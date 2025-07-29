# 🚀 QuantumCore - Sistema de Inteligência Quântica

## 📋 Descrição

O **QuantumCore** é um sistema avançado de inteligência artificial baseado em princípios quânticos, desenvolvido para monitoramento, análise e previsão de dados quânticos em tempo real.

## ✨ Características Principais

- 🔬 **Monitoramento Quântico**: Análise de estados quânticos em tempo real
- 🧠 **IA Quântica**: Algoritmos de machine learning baseados em princípios quânticos
- 📊 **Visualização Avançada**: Gráficos interativos e dashboards em tempo real
- 🔮 **Previsões**: Sistema de previsão quântica com alta precisão
- 💾 **Banco de Dados**: SQLite com modelos quânticos otimizados
- 🎨 **Interface Moderna**: Design futurista com animações quânticas

## 🛠️ Tecnologias Utilizadas

### Backend
- **Python 3.8+**
- **Flask** - Framework web
- **SQLAlchemy** - ORM para banco de dados
- **Scikit-learn** - Machine Learning
- **Pandas & NumPy** - Análise de dados

### Frontend
- **HTML5 & CSS3** - Estrutura e estilização
- **JavaScript** - Interatividade
- **Chart.js** - Visualização de dados
- **Google Fonts** - Tipografia (Orbitron, Rajdhani)

### Banco de Dados
- **SQLite** - Banco de dados local

## 🚀 Instalação e Execução

### Pré-requisitos
- Python 3.8 ou superior
- pip (gerenciador de pacotes Python)

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd QuantumCore
   ```

2. **Crie um ambiente virtual (recomendado)**
   ```bash
   python -m venv venv
   
   # Windows
   venv\Scripts\activate
   
   # Linux/Mac
   source venv/bin/activate
   ```

3. **Instale as dependências**
   ```bash
   pip install -r requirements.txt
   ```

4. **Execute o projeto**
   ```bash
   python app.py
   ```

5. **Acesse no navegador**
   ```
   http://localhost:5000
   ```

## 📁 Estrutura do Projeto

```
QuantumCore/
├── app.py                 # Aplicação principal Flask
├── requirements.txt       # Dependências Python
├── README.md             # Este arquivo
├── templates/            # Templates HTML
│   ├── base.html         # Template base
│   ├── index.html        # Página inicial
│   ├── dashboard.html    # Dashboard principal
│   └── quantum_lab.html  # Laboratório quântico
├── static/               # Arquivos estáticos
│   ├── css/              # Estilos CSS
│   │   ├── quantum-core.css
│   │   └── quantum-effects.css
│   ├── js/               # Scripts JavaScript
│   │   ├── quantum-core.js
│   │   └── quantum-effects.js
│   └── favicon.svg       # Ícone do projeto
└── quantum_core.db       # Banco de dados SQLite (criado automaticamente)
```

## 🔧 Funcionalidades

### 1. Dashboard Principal
- Visualização de dados quânticos em tempo real
- Gráficos interativos de energia, entropia e coerência
- Previsões quânticas com IA

### 2. Laboratório Quântico
- Experimentos virtuais com estados quânticos
- Configuração de parâmetros quânticos
- Análise de resultados em tempo real

### 3. Sistema de IA
- Treinamento automático de modelos
- Previsões baseadas em dados históricos
- Análise de precisão e confiança

### 4. API REST
- Endpoints para dados quânticos
- Treinamento de IA via API
- Previsões programáticas

## 📊 Modelos de Dados

### QuantumData
- `id`: Identificador único
- `timestamp`: Data e hora da medição
- `energy_level`: Nível de energia quântica
- `quantum_state`: Estado quântico (|0⟩, |1⟩, |+⟩, etc.)
- `entropy_value`: Valor de entropia
- `coherence_time`: Tempo de coerência
- `decoherence_rate`: Taxa de decoerência
- `superposition_quality`: Qualidade da superposição

### QuantumPrediction
- `id`: Identificador único
- `timestamp`: Data da previsão
- `predicted_energy`: Energia prevista
- `predicted_entropy`: Entropia prevista
- `confidence_level`: Nível de confiança
- `prediction_horizon`: Horizonte de previsão (horas)

## 🎨 Design System

### Cores Quânticas
- **Azul Quântico**: #00d4ff
- **Roxo Quântico**: #8b5cf6
- **Ciano Quântico**: #06b6d4
- **Rosa Quântico**: #ec4899
- **Verde Quântico**: #10b981
- **Laranja Quântico**: #f59e0b

### Tipografia
- **Orbitron**: Títulos e elementos principais
- **Rajdhani**: Texto e interface

### Animações
- Efeitos de partículas quânticas
- Rotação de órbitas
- Pulsos quânticos
- Transições suaves

## 🔌 API Endpoints

### GET `/api/quantum-data`
Retorna dados quânticos
```bash
curl "http://localhost:5000/api/quantum-data?limit=100"
```

### POST `/api/add-quantum-data`
Adiciona novos dados quânticos
```bash
curl -X POST "http://localhost:5000/api/add-quantum-data" \
  -H "Content-Type: application/json" \
  -d '{
    "energy_level": 50.0,
    "quantum_state": "|0⟩",
    "entropy_value": 0.5,
    "coherence_time": 100.0,
    "decoherence_rate": 0.1,
    "superposition_quality": 0.8
  }'
```

### POST `/api/train-ai`
Treina o modelo de IA
```bash
curl -X POST "http://localhost:5000/api/train-ai"
```

### GET `/api/predict`
Obtém previsões quânticas
```bash
curl "http://localhost:5000/api/predict?hours=24"
```

## 🚀 Deploy

### Local
```bash
python app.py
```

### Produção (Gunicorn)
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

### Docker (opcional)
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Desenvolvedor

**QuantumCore Team**
- Explorando os limites da computação quântica
- Desenvolvimento de sistemas de IA avançados
- Inovação em visualização de dados

## 📞 Suporte

Para suporte, envie um email para: support@quantumcore.dev

---

**⚛️ QuantumCore - Explorando os limites da computação quântica** 🚀 