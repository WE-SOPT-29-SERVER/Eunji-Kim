const level2 = {
  members: [
    { name: "박현지", station: "이대역", age: "23", group: "OB" },
    { name: "고성용", station: "불광역", age: "25", group: "OB" },
    { name: "조윤서", station: "백석역", age: "23", group: "OB" },
    { name: "김은지", station: "마두역", age: "24", group: "YB" },
  ],

  introduce: function () {
    console.log("1차 세미나 4조 팀원들을 소개합니다!");
    this.members.forEach((member) => {
      console.log(
        `${member.group} ${member.name}: ${member.station}에 살고 나이는 ${member.age}살 입니다.`
      );
    });
  },
};

level2.introduce();
