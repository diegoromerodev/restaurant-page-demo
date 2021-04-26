export default function locations() {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    const locations = document.createElement('div')
    locations.setAttribute('id', 'locations')

    const list = document.createElement('ul')
    list.innerHTML = `
    <object data="pin.svg"></object>
    <ul>
        <li>WE ARE CLOSE TO YOU</li>
        <li>WE ARE EVERYWHERE</li>
        <li>LOOK BEHIND YOU</li>
    </ul>
    `

    locations.append(list)
    content.appendChild(locations)
}