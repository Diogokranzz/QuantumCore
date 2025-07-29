// ===== QUANTUMCORE - JAVASCRIPT PRINCIPAL =====

class QuantumCore {
    constructor() {
        this.particles = [];
        this.charts = {};
        this.notifications = [];
        this.init();
    }

    init() {
        this.createParticles();
        this.setupEventListeners();
        this.initializeCharts();
        this.setupNotifications();
        this.forceContentVisibility();
    }

    // ===== FORÇAR VISIBILIDADE DO CONTEÚDO =====
    forceContentVisibility() {
        // Força a exibição de todos os elementos de conteúdo
        const contentElements = document.querySelectorAll('section, .hero-content, .hero-title, .hero-description, .section-title, .feature-card, .stat-card');
        contentElements.forEach(element => {
            element.style.display = 'block';
            element.style.visibility = 'visible';
            element.style.opacity = '1';
            element.style.position = 'relative';
            element.style.zIndex = '2';
        });

        // Garante que o main seja visível
        const main = document.querySelector('.quantum-main');
        if (main) {
            main.style.display = 'block';
            main.style.visibility = 'visible';
            main.style.opacity = '1';
            main.style.minHeight = 'calc(100vh - 200px)';
            main.style.background = 'var(--bg-dark)';
        }

        // Garante que o container seja visível
        const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
            container.style.display = 'block';
            container.style.visibility = 'visible';
            container.style.opacity = '1';
        });
    }

    // ===== SISTEMA DE PARTÍCULAS QUÂNTICAS =====
    createParticles() {
        const particleContainer = document.getElementById('quantum-particles');
        if (!particleContainer) return;

        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'quantum-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.zIndex = '1'; // Baixo z-index para partículas
            particleContainer.appendChild(particle);

            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 8000);
        };

        // Create particles periodically
        setInterval(createParticle, 2000);
        
        // Initial particles
        for (let i = 0; i < 5; i++) {
            setTimeout(createParticle, i * 500);
        }
    }

    // ===== SISTEMA DE EVENTOS =====
    setupEventListeners() {
        // Train AI button
        const trainBtn = document.getElementById('train-ai-btn');
        if (trainBtn) {
            trainBtn.addEventListener('click', () => this.trainAI());
        }

        // Quantum cards hover effects
        document.querySelectorAll('.quantum-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });

        // Form submissions
        document.querySelectorAll('.quantum-form').forEach(form => {
            form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        });
    }

    // ===== SISTEMA DE IA =====
    async trainAI() {
        const trainBtn = document.getElementById('train-ai-btn');
        if (trainBtn) {
            trainBtn.disabled = true;
            trainBtn.textContent = 'Treinando IA...';
        }

        try {
            const response = await fetch('/api/train-ai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();
            
            if (result.success) {
                this.showNotification('IA treinada com sucesso!', 'success');
                this.updateCharts();
            } else {
                this.showNotification('Erro no treinamento da IA', 'error');
            }
        } catch (error) {
            console.error('Erro ao treinar IA:', error);
            this.showNotification('Erro de conexão', 'error');
        } finally {
            if (trainBtn) {
                trainBtn.disabled = false;
                trainBtn.textContent = 'Treinar IA';
            }
        }
    }

    // ===== SISTEMA DE GRÁFICOS =====
    initializeCharts() {
        // Energy Chart
        const energyCtx = document.getElementById('energy-chart');
        if (energyCtx) {
            this.charts.energy = new Chart(energyCtx, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Energia Quântica',
                        data: [],
                        borderColor: '#00d4ff',
                        backgroundColor: 'rgba(0, 212, 255, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: '#ffffff',
                                font: {
                                    family: 'Rajdhani, sans-serif'
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            ticks: { 
                                color: '#a1a1aa',
                                font: {
                                    family: 'Rajdhani, sans-serif'
                                }
                            },
                            grid: { color: 'rgba(255, 255, 255, 0.1)' }
                        },
                        y: {
                            ticks: { 
                                color: '#a1a1aa',
                                font: {
                                    family: 'Rajdhani, sans-serif'
                                }
                            },
                            grid: { color: 'rgba(255, 255, 255, 0.1)' }
                        }
                    }
                }
            });
        }

        // Entropy Chart
        const entropyCtx = document.getElementById('entropy-chart');
        if (entropyCtx) {
            this.charts.entropy = new Chart(entropyCtx, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Entropia Quântica',
                        data: [],
                        borderColor: '#8b5cf6',
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: '#ffffff',
                                font: {
                                    family: 'Rajdhani, sans-serif'
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            ticks: { 
                                color: '#a1a1aa',
                                font: {
                                    family: 'Rajdhani, sans-serif'
                                }
                            },
                            grid: { color: 'rgba(255, 255, 255, 0.1)' }
                        },
                        y: {
                            ticks: { 
                                color: '#a1a1aa',
                                font: {
                                    family: 'Rajdhani, sans-serif'
                                }
                            },
                            grid: { color: 'rgba(255, 255, 255, 0.1)' }
                        }
                    }
                }
            });
        }

        // Coherence Chart
        const coherenceCtx = document.getElementById('coherence-chart');
        if (coherenceCtx) {
            this.charts.coherence = new Chart(coherenceCtx, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Tempo de Coerência',
                        data: [],
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: '#ffffff',
                                font: {
                                    family: 'Rajdhani, sans-serif'
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            ticks: { 
                                color: '#a1a1aa',
                                font: {
                                    family: 'Rajdhani, sans-serif'
                                }
                            },
                            grid: { color: 'rgba(255, 255, 255, 0.1)' }
                        },
                        y: {
                            ticks: { 
                                color: '#a1a1aa',
                                font: {
                                    family: 'Rajdhani, sans-serif'
                                }
                            },
                            grid: { color: 'rgba(255, 255, 255, 0.1)' }
                        }
                    }
                }
            });
        }
    }

    updateCharts() {
        // Update charts with new data
        fetch('/api/quantum-data?limit=24')
            .then(response => response.json())
            .then(data => {
                const labels = data.map(item => new Date(item.timestamp).toLocaleTimeString());
                const energyData = data.map(item => item.energy_level);
                const entropyData = data.map(item => item.entropy_value);
                const coherenceData = data.map(item => item.coherence_time);

                if (this.charts.energy) {
                    this.charts.energy.data.labels = labels;
                    this.charts.energy.data.datasets[0].data = energyData;
                    this.charts.energy.update('none'); // Evita animações que podem causar sobreposição
                }

                if (this.charts.entropy) {
                    this.charts.entropy.data.labels = labels;
                    this.charts.entropy.data.datasets[0].data = entropyData;
                    this.charts.entropy.update('none');
                }

                if (this.charts.coherence) {
                    this.charts.coherence.data.labels = labels;
                    this.charts.coherence.data.datasets[0].data = coherenceData;
                    this.charts.coherence.update('none');
                }
            })
            .catch(error => {
                console.error('Erro ao atualizar gráficos:', error);
            });
    }

    // ===== SISTEMA DE NOTIFICAÇÕES =====
    setupNotifications() {
        // Create notification container
        const notificationContainer = document.createElement('div');
        notificationContainer.id = 'notification-container';
        notificationContainer.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 10px;
            pointer-events: none;
        `;
        document.body.appendChild(notificationContainer);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = 'quantum-notification';
        notification.style.pointerEvents = 'auto';
        
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#00d4ff'
        };

        notification.style.borderColor = colors[type] || colors.info;
        notification.textContent = message;

        const container = document.getElementById('notification-container');
        if (container) {
            container.appendChild(notification);
        }

        // Remove notification after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 5000);
    }

    // ===== SISTEMA DE FORMULÁRIOS =====
    async handleFormSubmit(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        const data = {};

        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        try {
            const response = await fetch('/api/add-quantum-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            
            if (result.success) {
                this.showNotification('Dados quânticos adicionados!', 'success');
                form.reset();
                this.updateCharts();
            } else {
                this.showNotification('Erro ao adicionar dados', 'error');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            this.showNotification('Erro de conexão', 'error');
        }
    }

    // ===== SISTEMA DE ANIMAÇÕES =====
    animateValue(element, start, end, duration) {
        const startTime = performance.now();
        
        const updateValue = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = start + (end - start) * progress;
            element.textContent = Math.floor(current);
            
            if (progress < 1) {
                requestAnimationFrame(updateValue);
            }
        };
        
        requestAnimationFrame(updateValue);
    }

    // ===== SISTEMA DE MODAIS =====
    showModal(content) {
        const modal = document.createElement('div');
        modal.className = 'quantum-modal';
        modal.style.zIndex = '10000';
        modal.innerHTML = `
            <div class="modal-content">
                ${content}
                <button class="quantum-btn" onclick="this.closest('.quantum-modal').remove()">Fechar</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Trigger animation
        setTimeout(() => modal.classList.add('active'), 10);
    }

    // ===== SISTEMA DE ATUALIZAÇÃO EM TEMPO REAL =====
    startRealTimeUpdates() {
        setInterval(() => {
            this.updateCharts();
        }, 30000); // Update every 30 seconds
    }

    // ===== LIMPEZA DE ELEMENTOS =====
    cleanupOverlappingElements() {
        // Remove elementos que podem estar sobrepostos
        const overlappingElements = document.querySelectorAll('[style*="position: absolute"]');
        overlappingElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < 0 || rect.left < 0 || rect.right > window.innerWidth || rect.bottom > window.innerHeight) {
                element.remove();
            }
        });
    }
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    window.quantumCore = new QuantumCore();
    
    // Start real-time updates
    setTimeout(() => {
        window.quantumCore.startRealTimeUpdates();
    }, 5000);

    // Cleanup overlapping elements periodically
    setInterval(() => {
        if (window.quantumCore) {
            window.quantumCore.cleanupOverlappingElements();
        }
    }, 10000);

    // Força visibilidade do conteúdo após carregamento
    setTimeout(() => {
        if (window.quantumCore) {
            window.quantumCore.forceContentVisibility();
        }
    }, 1000);
});

// ===== UTILITÁRIOS GLOBAIS =====
window.QuantumUtils = {
    formatNumber: (num) => {
        return new Intl.NumberFormat('pt-BR').format(num);
    },
    
    formatDate: (date) => {
        return new Date(date).toLocaleString('pt-BR');
    },
    
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Função para corrigir sobreposições
    fixOverlappingText: () => {
        const textElements = document.querySelectorAll('p, h1, h2, h3, span, div');
        textElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.width > window.innerWidth || rect.height > window.innerHeight) {
                element.style.overflow = 'hidden';
                element.style.textOverflow = 'ellipsis';
            }
        });
    },

    // Função para forçar visibilidade
    forceVisibility: () => {
        const elements = document.querySelectorAll('section, .hero-content, .hero-title, .hero-description, .section-title, .feature-card, .stat-card');
        elements.forEach(element => {
            element.style.display = 'block';
            element.style.visibility = 'visible';
            element.style.opacity = '1';
        });
    }
}; 