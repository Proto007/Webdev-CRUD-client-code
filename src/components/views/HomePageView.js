/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
const HomePageView = () => {
  // Render Home page view
  return (
    <div >
      <h1>Home Page</h1>
      <img 
      src={"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_3125/https://cunystartups.com/wp-content/uploads/2019/06/Website-Logo-Graphic-%E2%80%94-150.jpg"} 
      alt="cuny"
      height="500"
      width="1000"
      />

    </div>
  );    
}

export default HomePageView;