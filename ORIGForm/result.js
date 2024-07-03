const container = document.querySelector('.holder');
const span = document.querySelector('#span')
const params = new URLSearchParams(window.location.search);


params.forEach((value, key)=>
{
    container.append(`${key} = ${value}`);
    container.append(document.createElement('br'));

    span.append(`${value}`)

    if(params.has('username'))
        {
            const name = params.get('username');
            // const welcomeMessege = `Welcome to ${name}`;
            // // container.textContent = welc++omeMessege;
            span.textContent = name;
            const nameHolder = document.createElement('div');
            nameHolder.classList.add('nameHolder');
            nameHolder.textContent = name;
        }
    
        if (params.has('confirmPassword')) {
            params.delete('confirmPassword');
        }
        
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        history.replaceState({}, '', newUrl);

        
})
