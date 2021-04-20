// alert('Hi')

function main() {
    window.addEventListener('resize', () => {
        const isMobile = window.innerWidth < 1200;
        document.body.classList.toggle('mobile', isMobile);
    })
}

main()