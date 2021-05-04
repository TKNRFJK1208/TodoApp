import React, { Component } from "react";

import flower03 from '../../assets/images/flower-03-md.png';
import flower04 from '../../assets/images/flower-04-md.png';

// components

// if you import css and image files compilation will make up missing files
import './Media.css';
 
class Media extends Component {

  render() {
    return (
      <div>        
        <h1>Media and React</h1>
        
        <p>We can load media into React:</p>

        <ul>
          <li>From the public folder in to JSX as we would with HTML.</li>
          <li>From the src folder, typically from a sub-folder of assets.  Here you would import the media in to the file.</li>
          <li>The advantage of the src file is that Webpack (or your builder) will show a compile error if the file is not found.</li>
          <li>You can test by altering the file names in the folder.  The public images will break but the src images won't pass compilation</li>
          <li>For SVG files you can add them as a constant either in the same file or better yet in an external file that you can import as needed</li>
        </ul>

        <div className="image-sample-container">
          <div>
            <h2>Load from Public and Src folder</h2>
            <div>
              <img src="./images/flower-01-md.png" className="sample-image" alt="flower 01" />
              <img src="./images/flower-02-md.png" className="sample-image" alt="flower 02" />
            </div>
          </div>

          <div>
            <h2>Load from Src folder</h2>

            <div>
              <img src={flower03} className="sample-image" alt="flower 03" />
              <img src={flower04} className="sample-image" alt="flower 04" />
            </div>
          </div>
        </div>


        
        
      </div>
      
    );
  }  
}

export default Media;