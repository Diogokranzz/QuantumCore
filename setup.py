#!/usr/bin/env python3
# ===== QUANTUMCORE SETUP SCRIPT =====

import os
import sys
import subprocess
import platform
from pathlib import Path

def print_banner():
    print("""
    ╔══════════════════════════════════════════════════════════════╗
    ║                    QUANTUMCORE SETUP                         ║
    ║              Sistema de Inteligência Quântica                ║
    ╚══════════════════════════════════════════════════════════════╝
    """)

def check_python_version():
    """Verifica se a versão do Python é compatível"""
    if sys.version_info < (3, 8):
        print("❌ Erro: Python 3.8 ou superior é necessário!")
        print(f"   Versão atual: {sys.version}")
        return False
    print(f"✅ Python {sys.version_info.major}.{sys.version_info.minor} detectado")
    return True

def create_virtual_environment():
    """Cria ambiente virtual se não existir"""
    venv_path = Path("venv")
    
    if not venv_path.exists():
        print("🔧 Criando ambiente virtual...")
        try:
            subprocess.run([sys.executable, "-m", "venv", "venv"], check=True)
            print("✅ Ambiente virtual criado com sucesso!")
        except subprocess.CalledProcessError:
            print("❌ Erro ao criar ambiente virtual")
            return False
    else:
        print("✅ Ambiente virtual já existe")
    
    return True

def get_activate_script():
    """Retorna o script de ativação correto para o sistema"""
    system = platform.system().lower()
    
    if system == "windows":
        return "venv\\Scripts\\activate"
    else:
        return "venv/bin/activate"

def install_dependencies():
    """Instala as dependências do projeto"""
    print("📦 Instalando dependências...")
    
    try:
        # Determina o pip correto
        if platform.system().lower() == "windows":
            pip_cmd = "venv\\Scripts\\pip"
        else:
            pip_cmd = "venv/bin/pip"
        
        # Instala as dependências
        subprocess.run([pip_cmd, "install", "-r", "requirements.txt"], check=True)
        print("✅ Dependências instaladas com sucesso!")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Erro ao instalar dependências: {e}")
        return False

def run_quantum_core():
    """Executa o QuantumCore"""
    print("🚀 Iniciando QuantumCore...")
    print("""
    ╔══════════════════════════════════════════════════════════════╗
    ║                    QUANTUMCORE ONLINE                        ║
    ║                                                              ║
    ║  🌐 Acesse: http://localhost:5000                           ║
    ║  📊 Dashboard: http://localhost:5000/dashboard              ║
    ║  🔬 Laboratório: http://localhost:5000/quantum-lab          ║
    ║                                                              ║
    ║  ⚠️  Pressione Ctrl+C para parar o servidor                 ║
    ╚══════════════════════════════════════════════════════════════╝
    """)
    
    try:
        # Determina o python correto
        if platform.system().lower() == "windows":
            python_cmd = "venv\\Scripts\\python"
        else:
            python_cmd = "venv/bin/python"
        
        # Executa o QuantumCore
        subprocess.run([python_cmd, "app.py"])
    except KeyboardInterrupt:
        print("\n🛑 QuantumCore encerrado pelo usuário")
    except subprocess.CalledProcessError as e:
        print(f"❌ Erro ao executar QuantumCore: {e}")

def main():
    """Função principal do setup"""
    print_banner()
    
    # Verifica versão do Python
    if not check_python_version():
        sys.exit(1)
    
    # Cria ambiente virtual
    if not create_virtual_environment():
        sys.exit(1)
    
    # Instala dependências
    if not install_dependencies():
        sys.exit(1)
    
    # Executa o QuantumCore
    run_quantum_core()

if __name__ == "__main__":
    main() 