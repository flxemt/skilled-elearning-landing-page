import data from './data.json'

const cards = document.getElementById('cards')

function renderCards() {
  let html = `
    <div class="bg-gradient-1 pt-6 pb-8 px-7 text-white rounded-card md:pl-8 md:pr-[1.375rem] md:pt-14 xl:pt-16 xl:px-8 xl:shadow-card xl:rounded-card-xl xl:self-end xl:pb-[8.625rem]">
      <h2 class="text-heading-s leading-[2rem] font-extrabold xl:text-heading-m xl:leading-heading-m">Check out our most popular courses!</h2>
    </div>
  `

  data.forEach(item => {
    html += `
      <div class="flex flex-col items-start bg-white px-7 pb-8 rounded-card md:pl-8 md:pr-[1.375rem] xl:px-8 xl:pb-10 xl:shadow-card xl:rounded-card-xl">
        <img src="${item.icon}" class="mt-[-25px]" alt="${item.name} icon">
        <h3 class="mt-6 text-dark-blue font-extrabold text-[1.25rem] leading-[1.25] xl:mt-8 xl:text-heading-s">${item.name}</h3>
        <p class="mt-4 font-medium leading-body-s xl:mt-6 xl:text-body-m xl:leading-body-m mb-6">${item.text}</p>
        <a href="${item.link}" class="font-bold inline-block text-body-m mt-auto text-dark-pink leading-body-m hover:text-pink-hover transition-colors">Get Started</a>
      </div>
    `

    cards.innerHTML = html
  })
}

renderCards()
