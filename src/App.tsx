import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { writeText } from '@tauri-apps/plugin-clipboard-manager';

function App() {

  async function handleSelect(emoji: any){
    await writeText(emoji.native);
  }

  return (
    <div
      className="overflow-auto"
      style={{ maxWidth: "100%" }}
    >
      <Picker
        data={data}
        onEmojiSelect={handleSelect}
        previewPosition="none"
        searchPosition="sticky"
        theme="light"
        skinTonePosition="search"
        autoFocus={true}
      />
    </div>
  );
}

export default App;
