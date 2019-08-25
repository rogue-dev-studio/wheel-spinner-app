// Wheel Spinner Application
class WheelSpinner {
    constructor() {
        this.canvas = document.getElementById('wheelCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.names = [];
        this.winners = [];
        this.isSpinning = false;
        this.currentRotation = 0;
        this.targetRotation = 0;
        this.spinAnimation = null;
        this.wheelSize = 400;
        this.spinDuration = 5;
        this.colorScheme = 'default';
        this.soundEnabled = true;
        this.removeWinner = true;
        
        this.colorSchemes = {
            default: ['#6366f1', '#8b5cf6', '#ec4899', '#ef4444', '#f59e0b', '#10b981', '#06b6d4', '#3b82f6'],
            rainbow: ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'],
            pastel: ['#ffb3ba', '#baffc9', '#bae1ff', '#ffffba', '#ffb3f7', '#f7b3ff', '#b3f7ff', '#f7ffb3'],
            dark: ['#1f2937', '#374151', '#4b5563', '#6b7280', '#9ca3af', '#d1d5db', '#e5e7eb', '#f3f4f6'],
            neon: ['#ff0080', '#00ff80', '#80ff00', '#0080ff', '#8000ff', '#ff8000', '#00ffff', '#ff00ff']
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadFromLocalStorage();
        this.updateNamesCount();
        this.drawWheel();
        this.updateCustomizationValues();
    }
    
    setupEventListeners() {
        // Spin button
        document.getElementById('spinButton').addEventListener('click', () => this.spin());
        
        // Input handling
        document.getElementById('namesInput').addEventListener('input', () => {
            this.updateNamesFromInput();
            this.updateNamesCount();
            this.drawWheel();
        });
        
        // Customization controls
        document.getElementById('spinDuration').addEventListener('input', (e) => {
            this.spinDuration = parseFloat(e.target.value);
            this.updateCustomizationValues();
        });
        
        document.getElementById('wheelSize').addEventListener('input', (e) => {
            this.wheelSize = parseInt(e.target.value);
            this.updateCustomizationValues();
            this.resizeCanvas();
            this.drawWheel();
        });
        
        document.getElementById('colorScheme').addEventListener('change', (e) => {
            this.colorScheme = e.target.value;
            this.drawWheel();
        });
        
        document.getElementById('soundEnabled').addEventListener('change', (e) => {
            this.soundEnabled = e.target.checked;
        });
        
        document.getElementById('removeWinner').addEventListener('change', (e) => {
            this.removeWinner = e.target.checked;
        });
        
        // Action buttons
        document.getElementById('addRandomButton').addEventListener('click', () => this.addRandomNames());
        document.getElementById('clearButton').addEventListener('click', () => this.clearNames());
        document.getElementById('clearHistoryButton').addEventListener('click', () => this.clearHistory());
        document.getElementById('restoreWinnersButton').addEventListener('click', () => this.restoreWinners());
        
        // Modal controls
        document.getElementById('resultModal').addEventListener('click', (e) => {
            if (e.target.id === 'resultModal') this.closeModal();
        });
        
        document.querySelector('.modal-close').addEventListener('click', () => this.closeModal());
        document.getElementById('closeModalButton').addEventListener('click', () => this.closeModal());
        document.getElementById('spinAgainButton').addEventListener('click', () => {
            this.closeModal();
            this.spin();
        });
        
        // Footer buttons
        document.getElementById('shareButton').addEventListener('click', () => this.shareWheel());
        document.getElementById('exportButton').addEventListener('click', () => this.exportWheel());
        document.getElementById('importButton').addEventListener('click', () => this.importWheel());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && !this.isSpinning && this.names.length > 0) {
                e.preventDefault();
                this.spin();
            }
        });
    }
    
    updateNamesFromInput() {
        const input = document.getElementById('namesInput').value;
        this.names = input.split('\n')
            .map(name => name.trim())
            .filter(name => name.length > 0);
        this.saveToLocalStorage();
    }
    
    updateNamesCount() {
        const count = this.names.length;
        document.getElementById('namesCount').textContent = count;
        
        const spinButton = document.getElementById('spinButton');
        if (count === 0) {
            spinButton.disabled = true;
            spinButton.innerHTML = '<span class="spin-text">TAMBAHKAN NAMA</span><span class="spin-icon">➕</span>';
        } else {
            spinButton.disabled = false;
            spinButton.innerHTML = '<span class="spin-text">PUTAR RODA</span><span class="spin-icon">🎲</span>';
        }
    }
    
    addRandomNames() {
        const randomNames = [
            'Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince', 'Edward Norton',
            'Fiona Green', 'George Washington', 'Helen Keller', 'Isaac Newton', 'Julia Roberts',
            'Kevin Spacey', 'Lisa Simpson', 'Michael Jackson', 'Nina Simone', 'Oliver Twist',
            'Penelope Cruz', 'Quentin Tarantino', 'Rachel Green', 'Steve Jobs', 'Taylor Swift',
            'Uma Thurman', 'Vincent Van Gogh', 'Winston Churchill', 'Xena Warrior', 'Yoda Master',
            'Zoe Saldana', 'Albert Einstein', 'Beyoncé Knowles', 'Christopher Columbus', 'Diana Ross'
        ];
        
        const currentNames = new Set(this.names);
        const availableNames = randomNames.filter(name => !currentNames.has(name));
        
        if (availableNames.length > 0) {
            const namesToAdd = availableNames.slice(0, Math.min(5, availableNames.length));
            this.names.push(...namesToAdd);
            this.updateInput();
            this.updateNamesCount();
            this.drawWheel();
            this.saveToLocalStorage();
        }
    }
    
    clearNames() {
        this.names = [];
        this.updateInput();
        this.updateNamesCount();
        this.drawWheel();
        this.saveToLocalStorage();
    }
    
    updateInput() {
        document.getElementById('namesInput').value = this.names.join('\n');
    }
    
    resizeCanvas() {
        this.canvas.width = this.wheelSize;
        this.canvas.height = this.wheelSize;
    }
    
    drawWheel() {
        if (this.names.length === 0) {
            this.drawEmptyWheel();
            return;
        }
        
        const centerX = this.wheelSize / 2;
        const centerY = this.wheelSize / 2;
        const radius = this.wheelSize / 2 - 20;
        
        // Clear canvas
        this.ctx.clearRect(0, 0, this.wheelSize, this.wheelSize);
        
        // Draw wheel segments
        const anglePerSegment = (2 * Math.PI) / this.names.length;
        const colors = this.colorSchemes[this.colorScheme];
        
        this.names.forEach((name, index) => {
            const startAngle = index * anglePerSegment + this.currentRotation;
            const endAngle = (index + 1) * anglePerSegment + this.currentRotation;
            const color = colors[index % colors.length];
            
            // Draw segment
            this.ctx.beginPath();
            this.ctx.moveTo(centerX, centerY);
            this.ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            this.ctx.closePath();
            this.ctx.fillStyle = color;
            this.ctx.fill();
            this.ctx.strokeStyle = '#ffffff';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            
            // Draw text
            this.ctx.save();
            this.ctx.translate(centerX, centerY);
            this.ctx.rotate(startAngle + anglePerSegment / 2);
            this.ctx.textAlign = 'right';
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = `bold ${Math.max(12, Math.min(16, 400 / this.names.length))}px Inter`;
            this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
            this.ctx.shadowBlur = 2;
            this.ctx.shadowOffsetX = 1;
            this.ctx.shadowOffsetY = 1;
            
            // Truncate text if too long
            const maxWidth = radius * 0.7;
            let displayText = name;
            while (this.ctx.measureText(displayText).width > maxWidth && displayText.length > 3) {
                displayText = displayText.slice(0, -1);
            }
            if (displayText !== name) {
                displayText = displayText.slice(0, -3) + '...';
            }
            
            this.ctx.fillText(displayText, radius - 10, 5);
            this.ctx.restore();
        });
        
        // Draw center circle
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, 15, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fill();
        this.ctx.strokeStyle = '#e5e7eb';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
    }
    
    drawEmptyWheel() {
        const centerX = this.wheelSize / 2;
        const centerY = this.wheelSize / 2;
        const radius = this.wheelSize / 2 - 20;
        
        // Clear canvas
        this.ctx.clearRect(0, 0, this.wheelSize, this.wheelSize);
        
        // Draw empty wheel
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#f3f4f6';
        this.ctx.fill();
        this.ctx.strokeStyle = '#e5e7eb';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        
        // Draw placeholder text
        this.ctx.fillStyle = '#9ca3af';
        this.ctx.font = '16px Inter';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Tambahkan nama untuk memulai', centerX, centerY - 10);
        this.ctx.fillText('🎯', centerX, centerY + 20);
    }
    
    spin() {
        if (this.isSpinning || this.names.length === 0) return;
        
        this.isSpinning = true;
        const spinButton = document.getElementById('spinButton');
        spinButton.disabled = true;
        spinButton.innerHTML = '<span class="spin-text">MEMUTAR...</span><span class="spin-icon">⚡</span>';
        
        // Play spin sound
        if (this.soundEnabled) {
            const spinSound = document.getElementById('spinSound');
            spinSound.currentTime = 0;
            spinSound.play().catch(() => {}); // Ignore autoplay restrictions
        }
        
        // Calculate random target rotation
        const randomAngle = Math.random() * 360;
        this.targetRotation = this.currentRotation + randomAngle + 720; // Add extra spins
        
        // Animate the spin
        const startTime = performance.now();
        const duration = this.spinDuration * 1000;
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            this.currentRotation = this.currentRotation + (this.targetRotation - this.currentRotation) * easeOut * 0.1;
            this.drawWheel();
            
            if (progress < 1) {
                this.spinAnimation = requestAnimationFrame(animate);
            } else {
                this.finishSpin();
            }
        };
        
        this.spinAnimation = requestAnimationFrame(animate);
    }
    
    finishSpin() {
        this.isSpinning = false;
        
        // Play win sound
        if (this.soundEnabled) {
            const winSound = document.getElementById('winSound');
            winSound.currentTime = 0;
            winSound.play().catch(() => {});
        }
        
        // Calculate winner
        const normalizedRotation = this.currentRotation % (2 * Math.PI);
        const anglePerSegment = (2 * Math.PI) / this.names.length;
        const winningIndex = Math.floor(((2 * Math.PI) - normalizedRotation) / anglePerSegment) % this.names.length;
        const winner = this.names[winningIndex];
        
        // Add to winners list
        const winnerEntry = {
            name: winner,
            time: new Date().toLocaleString('id-ID'),
            timestamp: Date.now()
        };
        this.winners.unshift(winnerEntry);
        this.updateWinnersList();
        
        // Remove winner from names list (optional feature)
        this.removeWinnerFromList(winner);
        
        this.saveToLocalStorage();
        
        // Show result modal
        this.showWinnerModal(winner);
        
        // Reset button
        const spinButton = document.getElementById('spinButton');
        spinButton.disabled = false;
        spinButton.innerHTML = '<span class="spin-text">PUTAR RODA</span><span class="spin-icon">🎲</span>';
    }
    
    showWinnerModal(winner) {
        document.getElementById('winnerDisplay').textContent = winner;
        document.getElementById('resultModal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        document.getElementById('resultModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    updateWinnersList() {
        const winnersList = document.getElementById('winnersList');
        
        if (this.winners.length === 0) {
            winnersList.innerHTML = '<p class="no-winners">Belum ada pemenang</p>';
            return;
        }
        
        winnersList.innerHTML = this.winners
            .slice(0, 10) // Show only last 10 winners
            .map(winner => `
                <div class="winner-item fade-in">
                    <span class="winner-name">${winner.name}</span>
                    <span class="winner-time">${winner.time}</span>
                </div>
            `)
            .join('');
    }
    
    clearHistory() {
        this.winners = [];
        this.updateWinnersList();
        this.saveToLocalStorage();
    }
    
    removeWinnerFromList(winnerName) {
        // Only remove winner if the option is enabled
        if (!this.removeWinner) return;
        
        // Remove winner from names list
        const index = this.names.indexOf(winnerName);
        if (index > -1) {
            this.names.splice(index, 1);
            this.updateInput();
            this.updateNamesCount();
            this.drawWheel();
            this.showNotification(`${winnerName} telah dihapus dari daftar`, 'info');
        }
    }
    
    restoreWinners() {
        // Add all winners back to the names list
        const winnerNames = this.winners.map(winner => winner.name);
        const currentNames = new Set(this.names);
        
        // Add winners that are not already in the list
        winnerNames.forEach(name => {
            if (!currentNames.has(name)) {
                this.names.push(name);
            }
        });
        
        this.updateInput();
        this.updateNamesCount();
        this.drawWheel();
        this.saveToLocalStorage();
        
        // Show notification
        this.showNotification(`${winnerNames.length} pemenang telah dikembalikan ke daftar!`);
    }
    
    updateCustomizationValues() {
        document.getElementById('spinDurationValue').textContent = this.spinDuration;
        document.getElementById('wheelSizeValue').textContent = this.wheelSize;
    }
    
    shareWheel() {
        const data = {
            names: this.names,
            colorScheme: this.colorScheme,
            spinDuration: this.spinDuration,
            wheelSize: this.wheelSize
        };
        
        const shareData = {
            title: 'Wheel Spinner - Putar Roda Keberuntungan',
            text: `Saya memiliki ${this.names.length} nama di wheel spinner!`,
            url: window.location.href
        };
        
        if (navigator.share) {
            navigator.share(shareData).catch(() => {
                this.copyToClipboard(JSON.stringify(data));
            });
        } else {
            this.copyToClipboard(JSON.stringify(data));
        }
    }
    
    exportWheel() {
        const data = {
            names: this.names,
            winners: this.winners,
            settings: {
                colorScheme: this.colorScheme,
                spinDuration: this.spinDuration,
                wheelSize: this.wheelSize,
                soundEnabled: this.soundEnabled,
                removeWinner: this.removeWinner
            }
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `wheel-spinner-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }
    
    importWheel() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const data = JSON.parse(e.target.result);
                        this.loadFromData(data);
                    } catch (error) {
                        alert('File tidak valid. Silakan pilih file JSON yang benar.');
                    }
                };
                reader.readAsText(file);
            }
        };
        input.click();
    }
    
    loadFromData(data) {
        if (data.names) this.names = data.names;
        if (data.winners) this.winners = data.winners;
        if (data.settings) {
            this.colorScheme = data.settings.colorScheme || 'default';
            this.spinDuration = data.settings.spinDuration || 5;
            this.wheelSize = data.settings.wheelSize || 400;
            this.soundEnabled = data.settings.soundEnabled !== undefined ? data.settings.soundEnabled : true;
            this.removeWinner = data.settings.removeWinner !== undefined ? data.settings.removeWinner : true;
        }
        
        this.updateInput();
        this.updateNamesCount();
        this.updateWinnersList();
        this.updateCustomizationValues();
        this.resizeCanvas();
        this.drawWheel();
        this.saveToLocalStorage();
        
        // Update UI controls
        document.getElementById('colorScheme').value = this.colorScheme;
        document.getElementById('spinDuration').value = this.spinDuration;
        document.getElementById('wheelSize').value = this.wheelSize;
        document.getElementById('soundEnabled').checked = this.soundEnabled;
        document.getElementById('removeWinner').checked = this.removeWinner;
    }
    
    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showNotification('Berhasil disalin ke clipboard!', 'success');
        });
    }
    
    showNotification(message, type = 'info') {
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        };
        
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${colors[type] || colors.info};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 10000;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: slideIn 0.3s ease-out;
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    saveToLocalStorage() {
        const data = {
            names: this.names,
            winners: this.winners,
            settings: {
                colorScheme: this.colorScheme,
                spinDuration: this.spinDuration,
                wheelSize: this.wheelSize,
                soundEnabled: this.soundEnabled,
                removeWinner: this.removeWinner
            }
        };
        localStorage.setItem('wheelSpinnerData', JSON.stringify(data));
    }
    
    loadFromLocalStorage() {
        const saved = localStorage.getItem('wheelSpinnerData');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.loadFromData(data);
            } catch (error) {
                console.error('Error loading from localStorage:', error);
            }
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WheelSpinner();
    
    // Add some sample names for demo
    const namesInput = document.getElementById('namesInput');
    if (!namesInput.value.trim()) {
        const sampleNames = [
            'Alice Johnson',
            'Bob Smith', 
            'Charlie Brown',
            'Diana Prince',
            'Edward Norton',
            'Fiona Green',
            'George Washington',
            'Helen Keller'
        ];
        namesInput.value = sampleNames.join('\n');
        namesInput.dispatchEvent(new Event('input'));
    }
});

// Service Worker for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
