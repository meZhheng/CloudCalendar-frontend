import React, {useState, useEffect} from 'react';

function Captcha() {
  const [captcha, setCaptcha] = useState('');
  const [captchaImage, setCaptchaImage] = useState('');

  useEffect(() => {
    fetch('/captcha.php')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => {
        const blob = new Blob([arrayBuffer], {type:'image/png'});
        const imageURL = URL.createObjectURL(blob);
        setCaptchaImage(imageURL);
      })
      .catch(error => {
        console.error('Error fetching captcha:', error);
      });
  }, []);
  const handleSubmit = e => {
    e.preventDefault();

    fetch('/captcha.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({captcha: captcha})
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message)
        if (data.valid) {
          alert('验证码正确！');
        } else {
          alert('验证码错误，请重新输入！');
        }
      })
      .catch(error => {
        console.error('Error verifying captcha:', error);
      });
  };

  return (
    <div className="Captcha">
      <header className="Captcha-header">
        <p>Captcha</p>
        <img src={captchaImage} alt="captcha"/>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={captcha}
            onChange={e => setCaptcha(e.target.value)}
          />
          <button type="submit">提交</button>
        </form>
      </header>
    </div>
  );
}

export default Captcha;