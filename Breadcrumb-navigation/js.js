document.getElementById('generate-breadcrumb').addEventListener('click', generateBreadcrumb);

        function generateBreadcrumb() {
            const breadcrumbList = document.getElementById('breadcrumb-list');
            const currentPage = window.location.pathname;

            // Rydder gammel info
            breadcrumbList.innerHTML = '';



            const List = document.createElement('p');
            List.innerHTML = '<a href="/">Hvidevarer</a>';
            breadcrumbList.appendChild(List);

            const List2 = document.createElement('p');
            List2.innerHTML = '<a href="./vaskemaskiner.html">/Vaskemaskiner</a>';
            breadcrumbList.appendChild(List2);

            const List3 = document.createElement('p');
            List3.innerHTML = '<p>/Bosch</p>';
            breadcrumbList.appendChild(List3); 
        }