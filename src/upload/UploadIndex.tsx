/**
 *@description
 *@author cy
 *@date 2022-05-12 09:58
 **/
import React, { useRef, useState } from 'react';
import { Spin, Upload, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const UploadIndex = () => {
  const [fileLoading, setFileLoading] = useState<boolean>(false);
  const readFileNumRef: any = useRef(0);
  const uploadProps = {
    name: 'file',
    multiple: true,
    maxCount: 1000,
    listType: 'text',
    accept: ['.jpg', '.png', '.bmp', '.jpeg'],
    showUploadList: { showPreviewIcon: false },
    onChange: (info: any) => {
      readFileNumRef.current = readFileNumRef.current + 1;
      console.log('time', readFileNumRef.current);
      // 判断当前加载的次数，等于选择文件数量则是加载完成
      if (readFileNumRef.current === info.fileList.length) {
        setFileLoading(false);
      } else {
        setFileLoading(true);
      }
    },
    beforeUpload: (file: any) => {
      return false;
    }
  };
  return (
    <>
      <Spin spinning={fileLoading} tip="图片加载中">
        <Upload {...uploadProps} className="importImg-text">
          <div>
            <Button icon={<PlusOutlined />}>添加图片</Button>
          </div>
        </Upload>
      </Spin>
    </>
  );
};
export default UploadIndex;