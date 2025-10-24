import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

function App() {

  return (
    <div
      className="overflow-auto resize-x min-w-[250px] w-[400px]"
      style={{ maxWidth: "100%" }}
    >
      <Picker
        data={data}
        onEmojiSelect={console.log}
        previewPosition="none"
        searchPosition="sticky"
        theme="light"
        skinTonePosition="search"
        autoFocus={true}
        emojiButtonRadius="6px"
        emojiButtonColors={[
          "rgba(155,223,88,.7)",
          "rgba(149,211,254,.7)",
          "rgba(247,233,34,.7)",
          "rgba(238,166,252,.7)",
          "rgba(255,213,143,.7)",
          "rgba(211,209,255,.7)",
        ]}
        // dynamicWidth={true}
      />
    </div>
  );
}

export default App;
