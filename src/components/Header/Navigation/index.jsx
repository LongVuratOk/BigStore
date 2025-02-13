import { Button } from '@mui/material';
import React, { useState } from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { GoRocket } from 'react-icons/go';
import CategoryPanel from './CategoryPanel';

const Navigation = () => {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);
  const openCategoryPanel = () => {
    setIsOpenCategoryPanel(true);
  };

  return (
    <>
      <nav className=" py-2">
        <div className="container flex items-center justify-end">
          <div className="col_1 w-[20%] ">
            <Button
              className=" !text-black gap-2 !font-bold"
              onClick={openCategoryPanel}
            >
              <RiMenu2Line className=" text-[18px]" /> Danh Mục
              <MdKeyboardArrowDown />
            </Button>
          </div>
          <div className="col_2 w-[63%]">
            <ul className=" flex items-center gap-3 nav">
              <li className=" list-none">
                <Link
                  to="/"
                  className=" link transition text-[14px] font-[600]"
                >
                  Trang chủ
                </Link>
              </li>
              <li className=" list-none relative">
                <Link
                  to="/"
                  className=" link transition text-[14px] font-[600]"
                >
                  Thời trang
                </Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className=" list-none w-full">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Thời trang Nam
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Thời trang Nữ
                        </Button>
                      </Link>
                    </li>

                    <li className=" list-none">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Thời trang Trung niên
                        </Button>
                      </Link>
                    </li>
                    <li className=" list-none">
                      <Link to="/" className=" w-full">
                        <Button className=" !text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !capitalize">
                          Thời trang Trẻ em
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" list-none">
                <Link
                  to="/"
                  className=" link transition text-[14px] font-[600]"
                >
                  Thiết bị điện tử
                </Link>
              </li>
              <li className=" list-none">
                <Link
                  to="/"
                  className=" link transition text-[14px] font-[600]"
                >
                  Túi sách
                </Link>
              </li>
              <li className=" list-none">
                <Link
                  to="/"
                  className=" link transition text-[14px] font-[600]"
                >
                  Giày dép
                </Link>
              </li>
              <li className=" list-none">
                <Link
                  to="/"
                  className=" link transition text-[14px] font-[600]"
                >
                  Đồ ăn
                </Link>
              </li>
              <li className=" list-none">
                <Link
                  to="/"
                  className=" link transition text-[14px] font-[600]"
                >
                  Làm đẹp
                </Link>
              </li>
              <li className=" list-none">
                <Link
                  to="/"
                  className=" link transition text-[14px] font-[600]"
                >
                  Sức khỏe
                </Link>
              </li>
              <li className=" list-none">
                <Link
                  to="/"
                  className=" link transition text-[14px] font-[600]"
                >
                  Trang sức
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_3 flex gap-1 items-center w-[17%] text-[13px] font-[500] link">
            Giao hàng quốc tế miễn phí <GoRocket />
          </div>
        </div>
      </nav>
      <CategoryPanel
        isOpenCategoryPanel={isOpenCategoryPanel}
        setIsOpenCategoryPanel={setIsOpenCategoryPanel}
      />
    </>
  );
};

export default Navigation;
