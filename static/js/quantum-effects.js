// ===== EFEITOS QUÂNTICOS AVANÇADOS =====

class QuantumEffects {
    constructor() {
        this.particles = [];
        this.effects = [];
        this.init();
    }

    init() {
        this.createQuantumParticles();
        this.setupKeyboardEffects();
        this.setupMouseEffects();
        this.fixOverlappingElements();
        this.preventContentDisappearance();
    }

    // ===== PREVENIR DESAPARECIMENTO DO CONTEÚDO =====
    preventContentDisappearance() {
        // Monitora mudanças de visibilidade
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    const element = mutation.target;
                    if (element.style.display === 'none' || element.style.visibility === 'hidden') {
                        element.style.display = 'block';
                        element.style.visibility = 'visible';
                        element.style.opacity = '1';
                    }
                }
            });
        });

        // Observa elementos importantes
        const importantElements = document.querySelectorAll('section, .hero-content, .hero-title, .hero-description, .section-title, .feature-card, .stat-card');
        importantElements.forEach(element => {
            observer.observe(element, { attributes: true, attributeFilter: ['style'] });
        });
    }

    // ===== SISTEMA DE PARTÍCULAS QUÂNTICAS =====
    createQuantumParticles() {
        const particleContainer = document.getElementById('quantum-particles');
        if (!particleContainer) return;

        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'quantum-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.zIndex = '1';
            particleContainer.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 8000);
        };

        setInterval(createParticle, 2000);
        
        for (let i = 0; i < 5; i++) {
            setTimeout(createParticle, i * 500);
        }
    }

    // ===== EFEITOS DE TECLADO =====
    setupKeyboardEffects() {
        document.addEventListener('keydown', (e) => {
            switch(e.key.toLowerCase()) {
                case 'q':
                    this.createQuantumWave();
                    break;
                case 'e':
                    this.createEnergyExplosion();
                    break;
                case 'r':
                    this.createQuantumRipple();
                    break;
            }
        });
    }

    // ===== EFEITOS DE MOUSE SIMPLIFICADOS =====
    setupMouseEffects() {
        let mouseTrail = [];
        const maxTrailLength = 10;

        document.addEventListener('mousemove', (e) => {
            mouseTrail.push({ x: e.clientX, y: e.clientY, timestamp: Date.now() });
            
            if (mouseTrail.length > maxTrailLength) {
                mouseTrail.shift();
            }

            // Cria rastro apenas ocasionalmente para não sobrecarregar
            if (Math.random() < 0.1) {
                this.createMouseTrail(e.clientX, e.clientY);
            }
        });

        document.addEventListener('click', (e) => {
            this.createClickEffect(e.clientX, e.clientY);
        });
    }

    // ===== EFEITOS ESPECÍFICOS =====
    createQuantumWave() {
        const wave = document.createElement('div');
        wave.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 0;
            height: 0;
            border: 2px solid var(--quantum-blue);
            border-radius: 50%;
            animation: quantum-wave 2s ease-out forwards;
            z-index: 1000;
            pointer-events: none;
        `;
        
        document.body.appendChild(wave);
        
        setTimeout(() => {
            if (wave.parentNode) {
                wave.parentNode.removeChild(wave);
            }
        }, 2000);
    }

    createEnergyExplosion() {
        const explosion = document.createElement('div');
        explosion.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, var(--quantum-blue), transparent);
            border-radius: 50%;
            animation: energy-explosion 1s ease-out forwards;
            z-index: 1000;
            pointer-events: none;
        `;
        
        document.body.appendChild(explosion);
        
        setTimeout(() => {
            if (explosion.parentNode) {
                explosion.parentNode.removeChild(explosion);
            }
        }, 1000);
    }

    createQuantumRipple() {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 0;
            height: 0;
            border: 1px solid var(--quantum-purple);
            border-radius: 50%;
            animation: quantum-ripple 1.5s ease-out forwards;
            z-index: 1000;
            pointer-events: none;
        `;
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 1500);
    }

    createMouseTrail(x, y) {
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: var(--quantum-blue);
            border-radius: 50%;
            pointer-events: none;
            z-index: 999;
            opacity: 0.6;
            animation: trail-fade 0.5s ease-out forwards;
        `;
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, 500);
    }

    createClickEffect(x, y) {
        const click = document.createElement('div');
        click.style.cssText = `
            position: fixed;
            left: ${x - 25}px;
            top: ${y - 25}px;
            width: 50px;
            height: 50px;
            border: 2px solid var(--quantum-blue);
            border-radius: 50%;
            animation: click-effect 0.5s ease-out forwards;
            pointer-events: none;
            z-index: 1000;
        `;
        
        document.body.appendChild(click);
        
        setTimeout(() => {
            if (click.parentNode) {
                click.parentNode.removeChild(click);
            }
        }, 500);
    }

    // ===== CORREÇÃO DE SOBREPOSIÇÕES =====
    fixOverlappingElements() {
        this.cleanupOverlappingElements();
        this.fixTextOverflow();
        this.adjustZIndex();
        
        setInterval(() => {
            this.cleanupOverlappingElements();
            this.fixTextOverflow();
        }, 5000);
    }

    cleanupOverlappingElements() {
        const overlappingElements = document.querySelectorAll('[style*="position: absolute"]');
        overlappingElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < 0 || rect.left < 0 || rect.right > window.innerWidth || rect.bottom > window.innerHeight) {
                element.remove();
            }
        });
    }

    fixTextOverflow() {
        const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
        textElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const parentRect = element.parentElement ? element.parentElement.getBoundingClientRect() : rect;
            
            if (rect.width > parentRect.width || rect.height > parentRect.height) {
                element.style.overflow = 'hidden';
                element.style.textOverflow = 'ellipsis';
                element.style.whiteSpace = 'nowrap';
            }
        });
    }

    adjustZIndex() {
        const importantElements = document.querySelectorAll('.quantum-header, .quantum-nav, .quantum-btn, .chart-container');
        importantElements.forEach((element, index) => {
            element.style.zIndex = (1000 + index).toString();
        });
    }
}

// ===== ANIMAÇÕES CSS DINÂMICAS =====
const quantumAnimations = `
@keyframes quantum-wave {
    0% {
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        width: 500px;
        height: 500px;
        opacity: 0;
    }
}

@keyframes energy-explosion {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) scale(3);
        opacity: 0;
    }
}

@keyframes quantum-ripple {
    0% {
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        width: 300px;
        height: 300px;
        opacity: 0;
    }
}

@keyframes trail-fade {
    0% {
        opacity: 0.6;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0.5);
    }
}

@keyframes click-effect {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
}
`;

// Adiciona as animações ao CSS
const style = document.createElement('style');
style.textContent = quantumAnimations;
document.head.appendChild(style);

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    window.quantumEffects = new QuantumEffects();
});

// ===== UTILITÁRIOS GLOBAIS =====
window.QuantumEffectsUtils = {
    fixOverlappingText: () => {
        const textElements = document.querySelectorAll('p, h1, h2, h3, span, div');
        textElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.width > window.innerWidth || rect.height > window.innerHeight) {
                element.style.overflow = 'hidden';
                element.style.textOverflow = 'ellipsis';
                element.style.whiteSpace = 'nowrap';
            }
        });
    },

    cleanupOrphanedElements: () => {
        const orphanedElements = document.querySelectorAll('[style*="position: absolute"]');
        orphanedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < 0 || rect.left < 0 || rect.right > window.innerWidth || rect.bottom > window.innerHeight) {
                element.remove();
            }
        });
    },

    adjustResponsiveLayout: () => {
        const containers = document.querySelectorAll('.container, .chart-container, .control-card');
        containers.forEach(container => {
            const rect = container.getBoundingClientRect();
            if (rect.width > window.innerWidth) {
                container.style.width = '100%';
                container.style.maxWidth = '100vw';
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

// Executa correções automáticas
setInterval(() => {
    if (window.QuantumEffectsUtils) {
        window.QuantumEffectsUtils.fixOverlappingText();
        window.QuantumEffectsUtils.cleanupOrphanedElements();
        window.QuantumEffectsUtils.adjustResponsiveLayout();
        window.QuantumEffectsUtils.forceVisibility();
    }
}, 3000); 