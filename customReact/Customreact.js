function customRender(reactElement,maincontainer){
    const domele=document.createElement(reactElement.type)
    domele.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        domele.setAttribute(prop,reactElement.props[prop])
    }
    maincontainer.appendChild(domele)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'click to visit google'
}

const maincontainer=document.querySelector('#root')

customRender(reactElement,maincontainer)