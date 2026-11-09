let btnTheme = document.getElementById('btnTheme');

let saved = localStorage.getItem('theme');
document.documentElement.dataset.theme = saved;
if(saved === null){
    if(matcMedia('(prefers-color-scheme: dark)').matches){
        saved = 'dark';
    }
    else{
        saved = 'light';
    }
}
btnTheme.addEventListener('click', function(){
    if(document.documentElement.dataset.theme === 'dark'){
        document.documentElement.dataset.theme = 'light';
        localStorage.setItem('theme', 'light');
    }
    else{
        document.documentElement.dataset.theme = 'dark';
        localStorage.setItem('theme', 'dark');
    }
});