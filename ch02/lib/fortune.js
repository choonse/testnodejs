const fortuneCookies = [
        "Conquer your fears or they will conquer you",
        "Rivers need spring.",
        "Do not fear what you don't knowwwwww",
        "You will have a pleasant surprise.",
        "Whenever possible, keep it simple."    
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
}