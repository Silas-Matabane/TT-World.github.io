// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu when a link is clicked
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Certificate data
    const certificates = [
        {
            title: "Responsive Web Design",
            issuer: "FreeCodeCamp",
            date: "June 10, 2023",
            image: "https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg",
            link: "https://freecodecamp.org/certification/MatabaneTeteloSilas/responsive-web-design"
        },
        {
            title: "AWS Cloud Quest: Cloud Practitioner",
            issuer: "AWS",
            date: "December 30, 2023",
            image: "images/Certificates&Badges/aws-cloud-quest-cloud-practitioner.png",
            link: "https://www.credly.com/badges/fcb187b6-8bd5-4d65-84a7-d5f09116e811/public_url"
        },
        {
            title: "Scrum Master Training",
            issuer: "Master of Project Academy",
            date: "December 13, 2022",
            image: "images/Certificates&Badges/Master of project academy.png",
            link: "https://drive.google.com/file/d/1fu-5dBqUvk8UrE2yiPhGSpezVVCuJiMf/view?usp=sharing"
        },
        {
            title: "Introduction to RPA and Automation",
            issuer: "UiPath",
            date: "October 13, 2022",
            image: "images/Certificates&Badges/uipath-logo.png",
            link: "https://drive.google.com/file/d/13OeS-3KS1PxBK1zFvrTTWOvLDpj8Cdfr/view?usp=sharing"
        },
        {
            title: "Azure Fundamentals",
            issuer: "Microsoft",
            date: "November 15, 2022",
            image: "images/Certificates&Badges/azure-fundamentals-describe-azure-architecture-services.svg",
            link: "https://learn.microsoft.com/en-us/training/achievements/learn.wwl.azure-fundamentals-describe-azure-architecture-services.trophy?username=TT-4245"
        },
        {
            title: "Microsoft Azure Fundamentals",
            issuer: "Microsoft",
            date: "November 15, 2022",
            image: "images/Certificates&Badges/microsoft-azure-fundamentals-describe-cloud-concepts.svg",
            link: "https://learn.microsoft.com/en-us/training/achievements/learn.wwl.microsoft-azure-fundamentals-describe-cloud-concepts.trophy?username=TT-4245"
        },
        {
            title: "Build web pages with HTML and CSS",
            issuer: "Microsoft",
            date: "September 12, 2022",
            image: "images/Certificates&Badges/build-web-pages-html-css-for-beginners.svg",
            link: "https://learn.microsoft.com/en-us/training/achievements/learn.wwl.build-web-pages-html-css-for-beginners.trophy?username=TT-4245&sharingId=66D846384B5942C4"
        },
        {
            title: "Work with Power BI visuals",
            issuer: "Microsoft",
            date: "November 15, 2022",
            image: "images/Certificates&Badges/visuals-power-bi.svg",
            link: "https://learn.microsoft.com/en-gb/training/achievements/learn-bizapps.visuals-power-bi.badge?username=TT-4245"
        },
        {
            title: "Build web apps with ASP.NET Core",
            issuer: "Microsoft",
            date: "September 19, 2022",
            image: "images/Certificates&Badges/generic-trophy.svg",
            link: "https://learn.microsoft.com/en-us/training/achievements/learn.aspnet-core-web-app.trophy?username=TT-4245&sharingId=66D846384B5942C4"
        },
        {
            title: "Get started with Microsoft data analytics",
            issuer: "Microsoft",
            date: "November 5, 2022",
            image: "images/Certificates&Badges/overview-data-analysis-power-bi.svg",
            link: "https://learn.microsoft.com/en-us/training/achievements/learn-bizapps.get-started-data-analytics.trophy?username=TT-4245&sharingId=66D846384B5942C4"
        },
        {
            title: "Introduction to version control with Git",
            issuer: "Microsoft",
            date: "August 11, 2022",
            image: "images/Certificates&Badges/intro-to-vc-git-badge.svg",
            link: "https://learn.microsoft.com/en-us/training/achievements/learn.student-evangelism.intro-to-vc-git.trophy?username=TT-4245&sharingId=66D846384B5942C4"
        },
        {
            title: "API",
            issuer: "IBM",
            date: "August 22, 2021",
            image: "images/Certificates&Badges/IBM_-_API.png",
            link: "https://www.credly.com/badges/77b49dee-8e65-40b2-95c3-6b6708f3d063?source=linked_in_profile"
        },
        {
            title: "Agile Methodologies",
            issuer: "IBM",
            date: "August 1, 2021",
            image: "images/Certificates&Badges/IBM_Agile_Intro_Innovator.png",
            link: "https://www.credly.com/badges/4154b5d8-396a-43f5-a051-79841d6b573b?source=linked_in_profile"
        },
        {
            title: "Git",
            issuer: "IBM",
            date: "August 15, 2021",
            image: "images/Certificates&Badges/IMB_Git.png",
            link: "https://www.credly.com/badges/9355e87b-6e1e-4de7-841b-c6d48a2fc219/linked_in_profile"
        },
        {
            title: "Web Development",
            issuer: "IBM",
            date: "August 15, 2021",
            image: "images/Certificates&Badges/IBM-_Web_Development.png",
            link: "https://www.credly.com/badges/bab82c3c-b644-44be-995c-9e632fa6fce6/linked_in_profile"
        },
        {
            title: "PHP",
            issuer: "Sololearn",
            date: "September 4, 2020",
            image: "images/Certificates&Badges/unnamed.webp",
            link: "https://www.sololearn.com/certificates/CT-1R8KNN4A"
        },
        {
            title: "CSS",
            issuer: "Sololearn",
            date: "August 29, 2020",
            image: "images/Certificates&Badges/unnamed.webp",
            link: "https://www.sololearn.com/certificates/CT-JMVNHEXU"
        },
        {
            title: "C#",
            issuer: "Sololearn",
            date: "January 18, 2024",
            image: "images/Certificates&Badges/unnamed.webp",
            link: "https://www.sololearn.com/certificates/CC-0VSYCKAC"
        }
    ];

    // Load certificates with pagination
    const certificatesContainer = document.getElementById('certificates-container');
    const loadMoreButton = document.getElementById('load-more');
    let currentIndex = 0;
    const certificatesPerLoad = 6;

    function loadCertificates() {
        const endIndex = Math.min(currentIndex + certificatesPerLoad, certificates.length);
        
        for (let i = currentIndex; i < endIndex; i++) {
            const cert = certificates[i];
            const certElement = document.createElement('div');
            certElement.className = 'col-md-4 col-sm-6 mb-4 fade-in';
            certElement.innerHTML = `
                <div class="card certificate-card h-100 shadow-sm">
                    <img src="${cert.image}" class="card-img-top certificate-img" alt="${cert.title}">
                    <div class="card-body certificate-body">
                        <h5 class="card-title certificate-title">${cert.title}</h5>
                        <p class="card-text certificate-text">${cert.issuer}<br>${cert.date}</p>
                        <a href="${cert.link}" target="_blank" class="btn btn-outline-primary mt-auto">View Certificate</a>
                    </div>
                </div>
            `;
            certificatesContainer.appendChild(certElement);
        }
        
        currentIndex = endIndex;
        
        if (currentIndex >= certificates.length) {
            loadMoreButton.style.display = 'none';
        }
    }

    // Initial load
    loadCertificates();

    // Load more button event
    loadMoreButton.addEventListener('click', loadCertificates);

    // Scroll reveal animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in:not(.animated)');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Add animation class to hero section elements
    const heroContent = document.querySelector('.hero-section .text-center, .hero-section .text-md-start');
    if (heroContent) {
        heroContent.classList.add('fade-in', 'animated');
    }
});