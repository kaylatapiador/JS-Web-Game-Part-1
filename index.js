function newImage(file, left, bottom){

    let character = document.createElement('img')

    character.src = file
    character.style.position = 'fixed'
    character.style.left = left+'px'
    character.style.bottom = bottom+'px'
    document.body.append(character)
    return character
}

newImage('assets/green-character.gif',100,100)
newImage('assets/pine-tree.png',450,200)
newImage('assets/tree.png',200,300)
newImage('assets/pillar.png',350,100)
newImage('assets/crate.png',150,200)
newImage('assets/well.png',500,425)

function newItem(file,left,bottom){
    let item = document.createElement('img')
    item.src = file
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom + 'px'
    document.body.append(item)

    item.addEventListener('dblclick',function(){item.remove()})
    return item
}

newItem('assets/sword.png',500,405)
newItem('assets/shield.png',165,185)
newItem('assets/staff.png',600,100)

