export default function contact() {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    
    const contact = document.createElement('div')
    contact.setAttribute('id', 'contact')
    const heading = document.createElement('h3')
    heading.innerHTML = "DON'T CALL US. <br/> WE'LL CALL YOU."

    const phone = document.createElement('object')
    phone.setAttribute('data', 'no-phone.svg')

    contact.append(phone, heading)
    content.append(contact)
}