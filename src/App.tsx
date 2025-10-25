import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { writeText } from '@tauri-apps/plugin-clipboard-manager';
import { Toaster, toast } from "sonner";
import { TitleBar } from './TitleBar';

function App() {

  async function handleSelect(emoji: any) {
    await writeText(emoji.native);
    toast.success(`Copied ${emoji.native} to clipboard!`);
  }

  return (
    <div
      className="overflow-hidden overflow-y-hidden bg-zinc-900"
      style={{ maxWidth: "100%" }}
    >
      <TitleBar />
      <Toaster position="top-center" richColors theme='dark' duration={700} visibleToasts={1} closeButton />
      <Picker
        data={data}
        onEmojiSelect={handleSelect}
        previewPosition="none"
        searchPosition="sticky"
        theme="dark"
        skinTonePosition="search"
        autoFocus={true}
      />
    </div>
  );
}

export default App;
