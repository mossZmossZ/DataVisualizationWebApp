import React from 'react'

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false)

  return (
    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                <strong>Data Visualization Covid-19</strong> by <a href="">Group 7</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
        </div>
    </footer>
  )
}