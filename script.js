<script>
    function toggleMenu() {
        const overlay = document.getElementById('mobileOverlay');
        overlay.classList.toggle('active');
        
        // Анимация иконок бургера (опционально)
        document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : 'auto';
    }
</script>