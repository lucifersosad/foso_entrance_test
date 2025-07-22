'use client';

import React, { useState } from 'react';
import { Container, Typography, Paper, Alert, Box } from '@mui/material';
import { 
  FilterAlt, 
  FilterList, 
  LocalGasStation, 
  AirlineStops,
} from '@mui/icons-material';
import Cascader, { Category, CascaderValue } from './index';

// Dữ liệu mẫu giống như trong hình - các loại bộ lọc ô tô
const filterCategories: Category[] = [
  // Danh mục cha
  { 
    id: 1, 
    name: 'Bộ Lọc Dầu', 
    // icon: <FilterAlt />,
    description: 'Bộ lọc dầu động cơ và hộp số'
  },
  { 
    id: 2, 
    name: 'Bộ Lọc Không Khí', 
    icon: <AirlineStops />,
    description: 'Bộ lọc không khí động cơ và cabin'
  },
  { 
    id: 3, 
    name: 'Bộ Lọc Nhiên Liệu', 
    icon: <LocalGasStation />,
    description: 'Bộ lọc xăng và dầu diesel'
  },
  { 
    id: 4, 
    name: 'Bộ Lọc Trong Cabin', 
    icon: <FilterList />,
    description: 'Lọc không khí trong khoang lái'
  },
  { 
    id: 5, 
    name: 'Bộ Lọc Không Khí', 
    icon: <FilterList />,
    description: 'Lọc không khí trong khoang lái'
  },
  { 
    id: 6, 
    name: 'Bộ Lọc Trong Cabin', 
    icon: <FilterList />,
    description: 'Lọc không khí trong khoang lái'
  },
  { 
    id: 7, 
    name: 'Bộ Lọc Nhiên Liệu', 
    icon: <LocalGasStation />,
    description: 'Bộ lọc xăng và dầu diesel'
  },
  { 
    id: 8, 
    name: 'Bộ Lọc Không Khí', 
    icon: <FilterList />,
    description: 'Lọc không khí trong khoang lái'
  },

  // Danh mục con của "Bộ Lọc Dầu"
  { 
    id: 11, 
    name: 'Bộ lọc gió', 
    parentId: 1,
    description: 'Phù hợp cho Chevrolet Cruze 2010-2016'
  },
  { 
    id: 12, 
    name: 'Bộ lọc gió', 
    parentId: 1,
    description: 'Phù hợp cho Toyota Camry 2012-2018'
  },
  { 
    id: 13, 
    name: 'Bộ lọc gió', 
    parentId: 1,
    description: 'Phù hợp cho Mercedes C-Class W204'
  },
  { 
    id: 14, 
    name: 'Bộ lọc gió', 
    parentId: 1,
    description: 'Phù hợp cho BMW 3 Series F30'
  },
  { 
    id: 15, 
    name: 'Bộ lọc gió', 
    parentId: 1,
    description: 'Phù hợp cho BMW 3 Series F30'
  },
  { 
    id: 16, 
    name: 'Bộ lọc gió', 
    parentId: 1,
    description: 'Phù hợp cho BMW 3 Series F30'
  },

  // Danh mục con của "Bộ Lọc Không Khí"
  { 
    id: 11, 
    name: 'Bộ lọc gió', 
    parentId: 2,
    description: 'Phù hợp cho Chevrolet Cruze 2010-2016'
  },
  { 
    id: 12, 
    name: 'Bộ lọc gió', 
    parentId: 2,
    description: 'Phù hợp cho Toyota Camry 2012-2018'
  },
  { 
    id: 13, 
    name: 'Bộ lọc gió', 
    parentId: 2,
    description: 'Phù hợp cho Mercedes C-Class W204'
  },
  { 
    id: 14, 
    name: 'Bộ lọc gió', 
    parentId: 2,
    description: 'Phù hợp cho BMW 3 Series F30'
  },
  { 
    id: 15, 
    name: 'Bộ lọc gió', 
    parentId: 2,
    description: 'Phù hợp cho BMW 3 Series F30'
  },
  { 
    id: 16, 
    name: 'Bộ lọc gió', 
    parentId: 2,
    description: 'Phù hợp cho BMW 3 Series F30'
  },


  // Danh mục con của "Bộ Lọc Nhiên Liệu"
  { 
    id: 31, 
    name: 'Lọc xăng - Nissan Altima', 
    parentId: 3,
    description: 'Bộ lọc xăng cho Nissan Altima 2013-2018'
  },
  { 
    id: 32, 
    name: 'Lọc dầu diesel - Volkswagen Jetta', 
    parentId: 3,
    description: 'Bộ lọc diesel cho VW Jetta TDI'
  },
  { 
    id: 33, 
    name: 'Lọc nhiên liệu - Audi A4', 
    parentId: 3,
    description: 'Phù hợp cho Audi A4 B8/B9'
  },

  // Danh mục con của "Bộ Lọc Trong Cabin"
  { 
    id: 41, 
    name: 'Lọc cabin than hoạt tính - Lexus ES', 
    parentId: 4,
    description: 'Lọc than hoạt tính cho Lexus ES 2013-2018'
  },
  { 
    id: 42, 
    name: 'Lọc cabin HEPA - Tesla Model 3', 
    parentId: 4,
    description: 'Bộ lọc HEPA cho Tesla Model 3'
  },
];

const CascaderDemo: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<CascaderValue>({
    parentCategory: null,
    childCategory: null,
  });

  return (
    <Container maxWidth="xl" className="py-8">
      <Typography variant="h4" component="h1" className="mb-6 text-center font-bold">
        🚗 Demo Cascader Hover Navigation - Danh Mục Bộ Lọc Ô Tô
      </Typography>

      <Alert severity="success" className="mb-6">
        <strong>✨ Tính năng mới:</strong> Hover vào danh mục cha để chọn ngay lập tức và xem danh mục con. 
        Mặc định sẽ chọn danh mục cha đầu tiên khi load!
      </Alert>

      {/* Component Cascader chính */}
      <Paper className="p-6 mb-8" elevation={2}>
        <Typography variant="h6" className="mb-4 text-blue-600">
          🏷️ Cascader Auto-Select on Hover
        </Typography>
        
        <Typography variant="body2" className="mb-4 text-gray-600">
          💡 <strong>Hướng dẫn sử dụng:</strong>
        </Typography>
        <ul className="mb-4 text-sm text-gray-600 space-y-1">
          <li>• <strong>Auto-select:</strong> Mặc định chọn danh mục cha đầu tiên khi load</li>
          <li>• <strong>Hover to select:</strong> Hover vào danh mục cha để chọn ngay</li>
          <li>• <strong>Click con:</strong> Click vào danh mục con để hoàn tất lựa chọn</li>
          <li>• <strong>Real-time:</strong> Thấy ngay danh mục con khi hover</li>
        </ul>
        
        <Cascader
          categories={filterCategories}
          value={selectedValue}
          onChange={setSelectedValue}
          sidebarWidth={320}
          showIcons={false}
          hoverDelay={0}
        />
      </Paper>

      {/* Hiển thị thông tin lựa chọn hiện tại */}
      <Paper className="p-6 bg-gray-50" elevation={1}>
        <Typography variant="h6" className="mb-4 text-green-600">
          📊 Thông tin lựa chọn hiện tại
        </Typography>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Typography variant="subtitle2" className="mb-2 font-semibold">
              Giá trị trả về:
            </Typography>
            <Box className="bg-white p-4 rounded-lg border">
              <pre className="text-sm text-gray-700 overflow-x-auto">
                {JSON.stringify({
                  parentCategory: selectedValue.parentCategory ? {
                    id: selectedValue.parentCategory.id,
                    name: selectedValue.parentCategory.name,
                    description: selectedValue.parentCategory.description,
                    // Bỏ icon để tránh circular reference
                  } : null,
                  childCategory: selectedValue.childCategory ? {
                    id: selectedValue.childCategory.id,
                    name: selectedValue.childCategory.name,
                    parentId: selectedValue.childCategory.parentId,
                    description: selectedValue.childCategory.description,
                    // Bỏ icon để tránh circular reference
                  } : null,
                }, null, 2)}
              </pre>
            </Box>
          </div>
          
          <div>
            <Typography variant="subtitle2" className="mb-2 font-semibold">
              Thông tin chi tiết:
            </Typography>
            <Box className="bg-white p-4 rounded-lg border space-y-2">
              <div>
                <strong>Danh mục chính:</strong> {selectedValue.parentCategory?.name || 'Chưa chọn'}
              </div>
              <div>
                <strong>Danh mục con:</strong> {selectedValue.childCategory?.name || 'Chưa chọn'}
              </div>
              <div>
                <strong>Mô tả:</strong> {
                  selectedValue.childCategory?.description || 
                  selectedValue.parentCategory?.description || 
                  'Không có'
                }
              </div>
              {selectedValue.childCategory && (
                <div className="mt-3 p-2 bg-blue-50 rounded">
                  <strong className="text-blue-700">✅ Đã chọn hoàn tất:</strong>
                  <br />
                  <span className="text-blue-600">
                    {selectedValue.parentCategory?.name} → {selectedValue.childCategory?.name}
                  </span>
                </div>
              )}
            </Box>
          </div>
        </div>
      </Paper>

      {/* Demo với các tùy chọn khác */}
      <Paper className="p-6 mt-8 bg-orange-50" elevation={1}>
        <Typography variant="h6" className="mb-4 text-orange-800">
          ⚙️ Tùy chọn Component
        </Typography>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Typography variant="subtitle2" className="mb-2 font-semibold">
              Props có thể tùy chỉnh:
            </Typography>
            <ul className="text-sm space-y-1">
              <li>• <code>sidebarWidth</code>: Độ rộng sidebar (px)</li>
              <li>• <code>showIcons</code>: Hiển thị/ẩn icon</li>
              <li>• <code>hoverDelay</code>: Độ trễ hover (ms)</li>
              <li>• <code>className</code>: CSS class tùy chỉnh</li>
            </ul>
          </div>
          
          <div>
            <Typography variant="subtitle2" className="mb-2 font-semibold">
              Tính năng UX:
            </Typography>
                         <ul className="text-sm space-y-1">
               <li>• 🚀 <strong>Auto-select:</strong> Chọn tự động danh mục cha đầu tiên</li>
               <li>• ⚡ <strong>Hover delay:</strong> Delay ngắn để UX mượt mà</li>
               <li>• 🎯 <strong>Instant selection:</strong> Hover là chọn ngay</li>
               <li>• 📱 <strong>Responsive:</strong> Grid tự động điều chỉnh</li>
               <li>• 🔄 <strong>Smart reset:</strong> Auto reset con khi đổi cha</li>
             </ul>
          </div>
        </div>
      </Paper>

      {/* Hướng dẫn tích hợp */}
      <Paper className="p-6 mt-8 bg-blue-50" elevation={1}>
        <Typography variant="h6" className="mb-4 text-blue-800">
          📖 Hướng dẫn tích hợp
        </Typography>
        
        <div className="space-y-4 text-sm">
          <div>
            <strong>1. Import Component:</strong>
            <pre className="bg-white p-3 rounded mt-2 text-xs overflow-x-auto border">
{`import Cascader, { Category, CascaderValue } from '@/components/Cascader';`}
            </pre>
          </div>

          <div>
            <strong>2. Cấu trúc dữ liệu Category:</strong>
            <pre className="bg-white p-3 rounded mt-2 text-xs overflow-x-auto border">
{`interface Category {
  id: string | number;
  name: string;
  parentId?: string | number | null; // null = danh mục cha
  icon?: React.ReactNode;             // Icon tùy chọn
  description?: string;               // Mô tả hiển thị trên card
}`}
            </pre>
          </div>

          <div>
            <strong>3. Sự kiện onChange:</strong>
            <pre className="bg-white p-3 rounded mt-2 text-xs overflow-x-auto border">
{`const handleCategoryChange = (value: CascaderValue) => {
  console.log('Danh mục cha:', value.parentCategory);
  console.log('Danh mục con:', value.childCategory);
  
  // Xử lý logic của bạn tại đây
  if (value.childCategory) {
    // User đã chọn danh mục con cụ thể
    loadProductsByCategory(value.childCategory.id);
  }
};`}
            </pre>
          </div>

                      <div>
             <strong>4. Tính năng chính:</strong>
             <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
               <li>🚀 <strong>Auto-select first:</strong> Tự động chọn danh mục cha đầu tiên khi load</li>
               <li>⚡ <strong>Hover to select:</strong> Hover vào danh mục cha là chọn ngay lập tức</li>
               <li>📋 <strong>Card Layout:</strong> Danh mục con hiển thị dạng card grid bên phải</li>
               <li>🎯 <strong>Instant feedback:</strong> Thấy ngay danh mục con khi hover</li>
               <li>🎨 <strong>Smart selection:</strong> Reset danh mục con khi đổi danh mục cha</li>
               <li>📱 <strong>Responsive Grid:</strong> Tự động điều chỉnh số cột theo màn hình</li>
             </ul>
           </div>
        </div>
      </Paper>
    </Container>
  );
};

export default CascaderDemo; 