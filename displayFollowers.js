const container = document.querySelector('.container')

const display = (followers) => {
  console.log(followers);
  const newFollowers = followers.map((follower) => {
    const {avatar_url, html_url, login} = follower
    return `
    <article class="card">
    <img src="${avatar_url}" alt="${login}" />
    <h4>${login}</h4>
    <a href="${html_url}" class="btn" target="_blank">view profile</a>
    </article>
    `
  }).join('')
  container.innerHTML = newFollowers
}

export default display