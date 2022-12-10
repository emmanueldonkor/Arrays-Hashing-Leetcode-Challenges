/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  //To store unique values
  let s = new Set();

  for (let email of emails) {
    let [local, domain] = email.split("@");
    local = local.replace(/\.|\+.*/g, "");

    s.add(`${local}@${domain}`);
  }

  return s.size;
};

//Time complexity O(n)
//space complexity O(1)
