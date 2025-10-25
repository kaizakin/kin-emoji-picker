import { getCurrentWindow } from '@tauri-apps/api/window'
import { X } from 'lucide-react';


export function TitleBar() {
    const appWindow = getCurrentWindow();
    return (
        <div
            data-tauri-drag-region
            className="h-8 flex items-center justify-end px-2 bg-white"
        >
            <button className='cursor-pointer hover:bg-black/10 rounded-full p-0.5' onClick={() => appWindow?.close()}><X/></button>
        </div>
    )
}
