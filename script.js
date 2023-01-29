let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-content")
let sidemenu = document.getElementById('sideMenu')

const opentab = (tabname) => {
    for (tablink of tablinks){
        tablink.classList.remove('active')
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove('active-content')
    }
    event.currentTarget.classList.add('active')
    document.getElementById(tabname).classList.add('active-content')
}

const openMenu = () => {
    sidemenu.style.right = '0'
}

const closeMenu = () => {
    sidemenu.style.right = '-200px'
}
