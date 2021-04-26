export default function menu() {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    const intro = document.createElement('div')
    intro.setAttribute('id', 'intro')

    const heading = document.createElement('h3')
    heading.innerHTML = 'HORRIBLE<br/>FOOD <span class="highlight">24/7</span>'

    const image = document.createElement('img')
    image.setAttribute('src', 'https://gourmetfood.com.au/wp-content/uploads/2020/05/homepage-crackers.png')

    intro.append(image, heading)
    content.appendChild(intro)
}