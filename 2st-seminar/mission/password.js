const fs = require("fs");
const crypto = require("crypto");

//password.txt 읽어오기
const title = "password";
const password = fs.readFileSync(`${title}.txt`);
console.log(
  `${title}.txt 파일에는 아래의 데이터가 있습니다. \n"${password}"\n`
);

//암호화
const salt = crypto.randomBytes(32).toString("hex"); //salt를 랜덤생성
const encrypt = (salt, password) => {
  crypto.pbkdf2(
    password,
    salt.toString(),
    100000,
    64,
    "sha512",
    (err, derivedKey) => {
      if (err) throw err;
      const hashed = derivedKey.toString("hex");
      //hashed.txt 작성
      fs.writeFileSync(`hashed.txt`, hashed);
      console.log(
        `hashed.txt 파일에는 아래의 데이터가 있습니다. \n"${hashed}"\n`
      );
    }
  );
};

encrypt(salt, password);
