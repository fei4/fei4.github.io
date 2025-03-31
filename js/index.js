const root = document.documentElement;
const eye = document.getElementById('eyeball');
const beam = document.getElementById('beam');
const passwordInput = document.getElementById('password');

root.addEventListener('mousemove', (e) => {
    let rect = beam.getBoundingClientRect();
    let mouseX = rect.right + (rect.width / 2);
    let mouseY = rect.top + (rect.height / 2);
    let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
    let degrees = (rad * (20 / Math.PI) * -1) - 350;

    root.style.setProperty('--beamDegrees', `${degrees}deg`);
});

eye.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.toggle('show-password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.focus();
});

// 新增密码验证函数
function validatePassword(event) {
    event.preventDefault(); // 阻止链接默认跳转行为
    const password = document.getElementById('password').value;

    if (password === "0403237") {
        // 跳转到新页面
        window.location.href = "seesand/index.html";
    } else {
        alert("密码错误！请重新输入");
        // 清空密码框并聚焦
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
}