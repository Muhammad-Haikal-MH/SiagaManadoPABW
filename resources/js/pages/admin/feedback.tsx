import {  FileText, Calendar } from 'lucide-react';
import AdminSidebar from '../components/Sidebar';
import { adminMenus } from './admin.constant';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback } from '@/components/ui/avatar';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Feedback {
    feedbacks: Array<any>;
}

const DashboardFeedback = (props: Feedback) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const { feedbacks } = props;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AdminSidebar menus={adminMenus} onToggle={setSidebarOpen} />

      {/* Main Content */}
      <main
        className={cn(
            "min-h-screen overflow-auto transition-all duration-300 w-full",
            sidebarOpen
            ? "md:ml-0 "
            : "md:ml-20"
        )}
      >
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4 text-[#1C398E] dark:text-[#F1F5F9]">Feedback Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {feedbacks.map((feedback: any) => (
                    <div key={feedback.id} className="bg-[#CFE6FF] dark:bg-[#1E293B] shadow-md rounded-xl p-6">
                        <div className="flex items-center mb-4 gap-2">
                            <Avatar>
                                <AvatarFallback className="h-10 w-10 bg-[#1C398E] dark:bg-[#F1F5F9] text-white font-bold dark:text-[#1C398E]">
                                    {feedback.fullName.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="text-lg font-semibold text-[#1C398E] dark:text-[#F1F5F9]">{feedback.fullName}</h2>
                                <p className="text-sm text-[#1C398E] dark:text-[#F1F5F9]">{feedback.email}</p>

                            </div>
                        </div>
                        <div className="mb-4">
                            <FileText className="w-6 h-6 text-[#1C398E] dark:text-[#F1F5F9] mr-2 inline-block" />
                            <p className="mt-2 truncate text-[#1C398E] dark:text-[#F1F5F9]">{feedback.deskripsi}</p>
                        </div>
                        <div className="text-sm text-[#1C398E] dark:text-[#F1F5F9] flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>{new Date(feedback.created_at).toLocaleDateString()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardFeedback;
