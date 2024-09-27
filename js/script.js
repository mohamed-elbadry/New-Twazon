$(document).ready(function () {
    /* ===========================
             wow 
       =========================== */
    function wowActivator() {
        wow = new WOW({
            offset: 0
        });
        wow.init();
    }
    wowActivator();
    /* ===========================
             nav-bar 
       =========================== */
    $("#open-menu").click(function () {
        var isExpanded = $(this).attr('aria-expanded');
        $(this).find('.fa-bars, .fa-bars').toggleClass('all');
        if (isExpanded === 'false') {
            $(this)
                .find('[data-fa-i2svg]')
                .toggleClass('fa-xmark')
                .toggleClass('fa-bars');
            $('body').css('position', 'static');
        } else {
            $(this)
                .find('[data-fa-i2svg]')
                .toggleClass('fa-bars')
                .toggleClass('fa-xmark');
            $('body').css({
                'position': 'fixed',
                'width': '100%',
                'height': '100%'
            });
        }
    })

    /* ===========================
                btn-nav-2 
           =========================== */
    const done = document.querySelectorAll('.btn-nav-2');
    done.forEach(function (el) {
        el.addEventListener('click', function () {

            const b = el.children[1];
            if (b.style.display === "block") {
                b.style.display = "block";
                $(this)
                    .find('[data-fa-i2svg]')
                    .toggleClass('fa-angle-down')
                    .toggleClass('fa-angle-up');
            } else {
                b.style.display = "block";
                $(this)
                    .find('[data-fa-i2svg]')
                    .toggleClass('fa-angle-down')
                    .toggleClass('fa-angle-up');
            }
        });
    });

    $(function () {
        $('nav .nav-item .nav-link').each(function () {
            var isActive = this.pathname === location.pathname;
            $(this).toggleClass('active', isActive);
        });
    });
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('closed');
    });
    function checkScreenWidth() {
        if (window.innerWidth <= 576) {
            sidebar.classList.add('closed');
        } else {
            sidebar.classList.remove('closed');
        }
    }

    // Call the function initially
    checkScreenWidth();
    const dashLinks = document.querySelectorAll('.dashboard-menu li a');

    // Function to handle link click
    function handleLinkClick(e) {
        // Remove active class from all links
        dashLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to clicked link
        e.target.classList.add('active');
    }

    // Add click event listener to each link
    dashLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    // Optional: Set initial active link based on current URL
    const dashcurrentURL = window.location.href;
    dashLinks.forEach(link => {
        if (link.href === dashcurrentURL) {
            link.classList.add('active');
        }
    });
});
