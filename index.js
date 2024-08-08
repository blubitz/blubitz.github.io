const info = await axios.get('/info.json')

info.data.skills.forEach(skill => {
    dom('#my-skills').append(
        (document.title.includes('Bill Zhou') ? makel('.skill-box', skill) : makel())
    )
})

doms('.project').forEach(e => {
    evans(e, {
        'click': async (evt) => {
            const { data } = await axios.get(evt.currentTarget.getAttribute("href"))
            dom('#overlay-content').innerHTML = data
            dom('#overlay').style.display = document.title.includes('Bill Zhou') ? 'flex' : 'none'
            dom('#home').style.display = document.title.includes('Bill Zhou') ? 'none' : 'unset'
        }
    })
})

evans(
    dom('#close-btn'),
    {
        'click': e => {
            dom('#overlay').style.display = document.title.includes('Bill Zhou') ? 'none' : 'block'
            dom('#home').style.display = document.title.includes('Bill Zhou') ? 'flex' : 'block'
        }
    }
)