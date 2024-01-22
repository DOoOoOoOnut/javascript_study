const chatBotBtn = document.querySelector('.chat_bot')
const chatContainer = document.querySelector('#chat_container')
const userInput = document.querySelector('#user_input > input')
const chatBtn = document.querySelector('#chat_btn')
const robotBtn = document.querySelector('#robot')
const chatMessage = document.querySelector('#chat_message')
console.log(chatBotBtn,chatContainer)
const apiEndpoint ='https://api.openai.com/v1/chat/completions'
const apiKey = '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'
//api ai 연결
async function fetchAIResponse(prompt) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: prompt
            }, ],
            temperature: 0.3,
            max_tokens: 400,
            top_p: 0.3,
            frequency_penalty: 0.5,
            presence_penalty: 0.5,
            stop: ["Human"],
        }),
    };
    try {
        const response = await fetch(apiEndpoint, requestOptions);
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        return aiResponse;
    } catch (error) {
		console.error('OpenAI API 호출 중 오류 발생:', error);
        return 'OpenAI API 호출 중 오류 발생';
    }
}

chatContainer.classList.add ('showhide')

robotBtn.addEventListener('click',()=>{
    chatContainer.classList.toggle('showhide')
    chatContainer.classList.toggle('show')
})

// 질문 입력 후 전송 버튼 클릭하면 나오는 자바스크립트


chatBtn.addEventListener('click', async()=>{
    let message = userInput.value;
    addMessage('you',message)
    userInput.value = ''
    // ai
    let aiMessage = await fetchAIResponse(message); // message를 ai 서버로 보내서 디코딩해서 보내라
    addMessage('AI',aiMessage)
})

// enter event
userInput.addEventListener('keydown',(e)=>{
    if(e.keycode === 13){
        chatBtn.click(); //버튼 강제 클릭
    }
})
// value 값으로 받은 메세지가 처리되는 함수
function addMessage(target,contents){
    const messageElement = document.createElement('div')
    messageElement.classList.add('message')
    messageElement.innerHTML = `${target} : ${contents}`
    chatMessage.appendChild(messageElement)
}