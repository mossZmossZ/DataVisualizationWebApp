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
    <footer className="footer">
        <div className="content has-text-centered">
            <p>
                <strong>Data Visualization Covid-19</strong> by <a href="https://github.com/ThanawatTP/DataVisualizationWebApp">Group 5</a>.
            </p>
            <button className="button" onClick={scrollToTop}>Back to Top</button>
        </div>
    </footer>
  )
}