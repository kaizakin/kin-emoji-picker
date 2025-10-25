import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { writeText } from '@tauri-apps/plugin-clipboard-manager';
import { Toaster, toast } from "sonner";


function App() {

  async function handleSelect(emoji: any){
    await writeText(emoji.native);
    toast.success(`Copied ${emoji.native} to clipboard!`);
  }

  return (
    <div
      className="overflow-hidden overflow-y-hidden"
      style={{ maxWidth: "100%" }}
    >
      <Toaster position="top-center" richColors theme='dark' duration={700} visibleToasts={1} closeButton />
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
