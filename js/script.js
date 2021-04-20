const customSelect = () => {
    const element = document.querySelector('#level');
    const choices = new Choices(element, {
        shouldSort: false,
        itemSelectText: 'Нажмите для выбора',
    });
}

const customInput = () => {
    const element = document.querySelector('#type');
    const choices = new Choices(element, {
        placeholder: true,
        placeholderValue: 'Type of service',
    });
}

customSelect();
customInput();

let currencys = document.querySelectorAll('.currency');

currencys.forEach((item)=> {
    item.addEventListener('click',() => {
        if(item.classList.contains('selects-currency--active')) {
            currencys.forEach(element => {
                element.classList.remove('selects-currency--active');
            })
            item.classList.remove('selects-currency--active');
        } else {
            currencys.forEach(element => {
                element.classList.remove('selects-currency--active');
            })
            item.classList.add('selects-currency--active');
        }
    });
})

let rows = document.querySelectorAll('.table-row');


rows.forEach((row) => {
    row.addEventListener('click', (event) => {
        if (event.target.classList.contains('days5')) {
            if (event.target.classList.contains('active-cell')) {
                row.querySelectorAll('div').forEach((element) => {
                    element.classList.remove('active-cell');
                });
                getTotalPrice();
            } else {
                row.querySelectorAll('div').forEach((element) => {
                    element.classList.remove('active-cell');
                });
                event.target.classList.add('active-cell');
                getTotalPrice();
            }
        } else if (event.target.classList.contains('days3')){
            if (event.target.classList.contains('active-cell')) {
                row.querySelectorAll('div').forEach((element) => {
                    element.classList.remove('active-cell');
                });
                getTotalPrice();
            } else {
                row.querySelectorAll('div').forEach((element) => {
                    element.classList.remove('active-cell');
                });
                event.target.classList.add('active-cell');
                getTotalPrice();
            }
        } else if (event.target.classList.contains('hours48')) {
            if (event.target.classList.contains('active-cell')) {
                row.querySelectorAll('div').forEach((element) => {
                    element.classList.remove('active-cell');
                });
                getTotalPrice();
            } else {
                row.querySelectorAll('div').forEach((element) => {
                    element.classList.remove('active-cell');
                });
                event.target.classList.add('active-cell');
                getTotalPrice();
            }
        } else if (event.target.classList.contains('hours24')){
            if (event.target.classList.contains('active-cell')) {
                row.querySelectorAll('div').forEach((element) => {
                    element.classList.remove('active-cell');
                });
                getTotalPrice();
            } else {
                row.querySelectorAll('div').forEach((element) => {
                    element.classList.remove('active-cell');
                });
                event.target.classList.add('active-cell');
                getTotalPrice();
            }
        }
    });
})

const getTotalPrice = () => {
    let elements = document.querySelectorAll('.active-cell');
    let total = 0;
    elements.forEach((element) => {
        let figures = element.innerHTML;
        figures = +figures.slice(1);
        total += figures;
        console.log(total);
    });
    document.querySelector('.order #total').innerText = total.toFixed(2);
} 

getTotalPrice();

let header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    if(pageYOffset >= 80) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll');
    }
  });