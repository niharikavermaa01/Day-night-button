
  const toggle = document.querySelector('.toggle-switch input');
  const body = document.body;
  const moon = document.querySelector('.moon');
  const circleOne = document.querySelector('.circle-one');
  const circleTwo = document.querySelector('.circle-two');
  const p= document.querySelector('p');
  const tree1 = document.querySelector('.tree1');
  const tree2 = document.querySelector('.tree2');
  const tree3 = document.querySelector('.tree3');


  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      // Morning mode
      body.style.background = 'linear-gradient(rgba(253, 190, 72, 1), rgba(247, 233, 109, 1))';

      moon.style.background = 'radial-gradient(circle, yellow, orange)';
      moon.style.boxShadow = '0 0 20px 10px rgba(255, 255, 100, 0.8)';
    
      p.style.marginLeft= '162px';
      p.style.transition= '0.4s';

      tree1.style.background= 'linear-gradient(to top, #663701, #614803, #098633, #00a02d, #1fff50)';
      tree2.style.background= 'linear-gradient(to top, #663701, #614803, #098633, #00a02d, #1fff50)';
      tree3.style.background= 'linear-gradient(to top, #663701, #614803, #098633, #00a02d, #1fff50)';
      
      
      circleOne.style.background = 'linear-gradient(#deb887, #d49241ff)';
      circleTwo.style.background = 'linear-gradient(#f4a460, #e08f3dff)';
    } else {
      // Night mode
      body.style.background = 'linear-gradient(rgb(13, 12, 107), rgb(247, 139, 157))';

      moon.style.background = 'linear-gradient(white, #ddd)';
      moon.style.boxShadow = '1px 1px 12px 10px whitesmoke';

      tree1.style.background= 'black'
      tree2.style.background= 'black';
      tree3.style.background= 'black';
      
      p.style.marginLeft= '10px';

      circleOne.style.background = 'linear-gradient(rgb(51, 39, 39), black)';
      circleTwo.style.background = 'linear-gradient(rgb(34, 25, 25), rgb(37, 31, 31), black)';
    }
  });

