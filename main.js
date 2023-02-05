//유저가 값을 입력한다
//+버튼을 클릭하면 , 할일이 추가된다
// delete버튼을 누르면 할일이 삭제된다
//check버튼을 누르면 할일이 끝나면서 밑줄이 간다
//1. check 버튼을 클릭하는 순간 true false
//2. true이면 끝난걸로 간주하고 밑줄 보여주기
//3. flase이면 안끝난걸로 간주하고 그대로

//진행중 끝남 탭을 누르면, 언더바가 이동한다
//끝남탭은, 끝난 아이템만, 진행중탭은 진행중인 아이템만
//전체탭을 누르면 다시 전체아이템으로 돌아옴


let taskInput = document.getElementById("task-input"); // input 창 넣기
//console.log(taskInput); 값이 들어왔는지 확인해주기
let addButton = document.getElementById("add-button");
let taskList = []

addButton.addEventListener("click",addTask); // 클릭하면 addTask 함수 실행

function addTask(){
    // console.log("clicked"); 중간중간 값이 들어왔는지 콘솔로 꼭꼭 확인해주기 그래야 에러를 찾기 쉬움

    //let taskContent = taskInput.value;

    let task = { //객체
        id:randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete:false, //끝낫는지 안끝낫는지 확인 //안끝낫어 false
    }

    taskList.push(task);
    console.log(taskList);
    render(); //html로 반환하는 함수


}

function render(){
    let resultHTML = ""; //스트링변수 생성
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].isComplete ==true){ //끝났다는 뜻 true면 아래와 같이 출력
            resultHTML+=`<div class="task">
            <div class="task-done">${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">Check</button>

            </div>
        </div>`;
        }else{



        resultHTML +=`<div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
            <button onclick="toggleComplete('${taskList[i].id}')">Check</button> 

        </div>
    </div>`;
    }//체크를 선택하면 <button onclick="toggleComplete('${taskList[i].id}')">Check</button> 토클이 실행됨.  
    //클릭이벤트를 바로 주고싶다 onclick 속성 사용 온클릭 안에는 원하는 함수 지정
    //버튼은 1. addEventListener 주는 방식 2. onclick 주는 방식 두가지 방법이 있음
    //똑같지만 약간의 차이는 있음

    document.getElementById("task-board").innerHTML = resultHTML;
    }
}

//innerHTML과 textContent 차이 알아두기

function toggleComplete(id){ //id를 매개변수로 받게됨. 
    //console.log("id:",id);
    for(let i=0;i<taskList.length;i++){ // id를 갖고 있는애를 찾음
        if(taskList[i].id==id){
            //taskList[i].isComplete=true; //값이 같으면 true로 바꿔준다.
            taskList[i].isComplete=!taskList[i].isComplete; 
            // !아니다 not 사용. 현재 갖고 있는것의 반대값을 가져오는 것을 넣어줘야함.
            // taskList[i].isComplete=true; 의 경우 계속 true이기 때문.
            break; //true면 종료
        }
    }
    render(); //함수 끝나면 render 함수로 불러줘야함
    console.log(taskList);
} //id값을 베이스로 아이템을 찾기


function randomIDGenerate(){
    // return Date.now().toString(36) + Math.random().toString(36).substr(2);
    return '_'+Math.random().toString(36).substr(2,9);
} //어떤 버튼을 클릭하는지 id를 설정해줘야함