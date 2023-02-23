import data from './data.json'

const cards = document.getElementById('cards')

function renderCards() {
  let html = `
    <div class="bg-gradient-1 text-heading-s leading-[2rem] pt-6 pb-8 px-7 text-white rounded-card font-extrabold md:pt-14">
      <h5>Check out our most popular courses!</h5>
    </div>
  `

  data.forEach(item => {
    html += `
      <div class="flex flex-col items-start bg-white px-7 pb-8 rounded-card md:pl-8 md:pr-[1.375rem] xl:px-8 xl:pb-10 xl:shadow-card">
        <img src="${item.icon}" class="mt-[-28px]" alt="${item.name} icon">
        <h5 class="mt-6 text-dark-blue font-extrabold text-[1.25rem] leading-[1.25] xl:mt-8 xl:text-heading-s">${item.name}</h5>
        <p class="mt-4 font-medium leading-body-s xl:mt-6 xl:text-body-m xl:leading-body-m mb-6">${item.text}</p>
        <a href="${item.link}" class="font-bold inline-block text-body-m mt-auto text-dark-pink leading-body-m hover:text-pink-hover transition-colors">Get Started</a>
      </div>
    `

    cards.innerHTML = html
  })
}

renderCards()
