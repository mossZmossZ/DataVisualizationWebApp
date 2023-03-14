import React from 'react'

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false)
  const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
    }

  return (
    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                <strong>Data Visualization Covid-19</strong> by <a href="https://github.com/ThanawatTP/DataVisualizationWebApp">Group 7</a>.
            </p>
            <button onClick={scrollToTop}>Back to Top</button>
        </div>
    </footer>
  )
}