var box = {

  locked: true,

  unlock() { this.locked = false; },

  lock() { this.locked = true;  },

  _content: [],

  get content() {

    if (this.locked) throw new Error("Locked!");

    return this._content;

  }

};

function withBoxUnlocked(body) {

  if (!box.locked) {

    return body();

  }

  box.unlock();

  try {

    return body();

  } finally {

    box.lock();
  }
}

withBoxUnlocked(function() {

  box.content.push("bitcoin");
});

try {

  withBoxUnlocked(function() {

    throw new Error("Attention!");

  });

} catch (e) {

  console.log("Error raised:", e);

}

console.log(box.locked);
