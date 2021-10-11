//MISSION1 async$await 이용해서 구현
const members = require("./members");

const getOnline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.location === "online");
      resolve(data);
    }, 500);
  });
};

const getOffline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.location === "offline");
      resolve(data);
    }, 500);
  });
};

const getYB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.group === "YB");
      resolve(data);
    }, 500);
  });
};

const getOB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = members.filter((o) => o.group === "OB");
      resolve(data);
    }, 500);
  });
};

//async, await로 구현
const asyncFunc = async (members) => {
  const onlineMembers = await getOnline(members);
  const onlineOBMembers = await getOB(onlineMembers);
  console.log(onlineOBMembers);
};

const asyncFunc2 = async (members) => {
  const offlineMembers = await getOffline(members);
  const offlineYBMembers = await getYB(offlineMembers);
  console.log(offlineYBMembers);
};

asyncFunc(members);
asyncFunc2(members);

// getOnline(members)
//     .then(result => getOB(result))
//     .then(result => console.log(result));
