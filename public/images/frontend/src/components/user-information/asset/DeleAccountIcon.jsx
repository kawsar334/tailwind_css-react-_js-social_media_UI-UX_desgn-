import React from 'react'

const DeleAccountIcon = ({ accountDeleteStatus }) => {
    return (
        <>{accountDeleteStatus ? (
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35 7C50.4048 7 63 19.5951 63 35C63 50.4048 50.4049 63 35 63C19.5952 63 7 50.4048 7 35C7 19.5952 19.5952 7 35 7Z" fill="#FF604A" fill-opacity="0.2" />
                <path d="M41.4561 26.7665C41.4559 28.0432 41.0772 29.2912 40.3678 30.3526C39.6584 31.414 38.6501 32.2413 37.4706 32.7297C36.2911 33.2182 34.9932 33.3459 33.7411 33.0967C32.4889 32.8475 31.3388 32.2327 30.4361 31.3299C29.5335 30.4271 28.9188 29.2769 28.6698 28.0247C28.4208 26.7726 28.5486 25.4747 29.0372 24.2952C29.5258 23.1157 30.3532 22.1076 31.4147 21.3984C32.4763 20.6891 33.7243 20.3105 35.0009 20.3105C35.8487 20.3106 36.6881 20.4776 37.4713 20.8021C38.2545 21.1266 38.9662 21.6021 39.5656 22.2016C40.165 22.8011 40.6405 23.5128 40.9648 24.2961C41.2892 25.0793 41.4561 25.9188 41.4561 26.7665ZM35.0009 35.1318C33.173 35.1297 31.3646 35.5086 29.6913 36.2443C28.0179 36.9801 26.5163 38.0566 25.2822 39.4051C23.1038 41.7785 23.6374 45.5543 26.3802 47.2441C28.9737 48.8367 31.9575 49.6797 35.0009 49.6797C38.0443 49.6797 41.0282 48.8367 43.6216 47.2441C46.3645 45.5543 46.8981 41.7785 44.7196 39.4051C43.4856 38.0566 41.9839 36.9801 40.3106 36.2443C38.6372 35.5086 36.8289 35.1297 35.0009 35.1318Z" fill="white" />
                <path d="M58 24C64.6274 24 70 18.6274 70 12C70 5.37258 64.6274 0 58 0C51.3726 0 46 5.37258 46 12C46 18.6274 51.3726 24 58 24Z" fill="#FF6262" />
                <path d="M62.1735 17.7416C61.9679 17.7419 61.7643 17.7015 61.5744 17.6228C61.3845 17.5441 61.212 17.4287 61.0668 17.2831L52.719 8.93525C52.4273 8.64138 52.2639 8.24387 52.2647 7.82978C52.2654 7.41569 52.4302 7.01878 52.723 6.72597C53.0158 6.43316 53.4128 6.26833 53.8268 6.26758C54.2409 6.26683 54.6384 6.43021 54.9323 6.72195L63.2801 15.0698C63.499 15.2887 63.648 15.5675 63.7084 15.8711C63.7688 16.1747 63.7378 16.4894 63.6193 16.7754C63.5009 17.0613 63.3003 17.3058 63.043 17.4778C62.7856 17.6498 62.483 17.7416 62.1735 17.7416Z" fill="#EAF4F4" />
                <path d="M53.8257 17.7416C53.5162 17.7416 53.2136 17.6498 52.9563 17.4778C52.6989 17.3058 52.4983 17.0613 52.3799 16.7754C52.2614 16.4894 52.2304 16.1747 52.2908 15.8711C52.3512 15.5675 52.5002 15.2887 52.7191 15.0698L61.0669 6.72195C61.3608 6.43021 61.7583 6.26683 62.1724 6.26758C62.5864 6.26833 62.9834 6.43316 63.2762 6.72597C63.569 7.01878 63.7338 7.41569 63.7346 7.82978C63.7353 8.24387 63.5719 8.64138 63.2802 8.93525L54.9324 17.2831C54.7872 17.4287 54.6147 17.5441 54.4248 17.6228C54.2349 17.7015 54.0313 17.7419 53.8257 17.7416Z" fill="#EAF4F4" />
            </svg>

        ) : (
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35 7C50.4048 7 63 19.5951 63 35C63 50.4048 50.4049 63 35 63C19.5952 63 7 50.4048 7 35C7 19.5952 19.5952 7 35 7Z" fill="#FF604A" fill-opacity="0.2" />
                <path d="M41.4559 26.7665C41.4558 28.0432 41.077 29.2912 40.3676 30.3526C39.6582 31.414 38.65 32.2413 37.4705 32.7297C36.2909 33.2182 34.9931 33.3459 33.7409 33.0967C32.4888 32.8475 31.3387 32.2327 30.436 31.3299C29.5333 30.4271 28.9186 29.2769 28.6696 28.0247C28.4206 26.7726 28.5485 25.4747 29.0371 24.2952C29.5257 23.1157 30.3531 22.1076 31.4146 21.3984C32.4761 20.6891 33.7241 20.3105 35.0008 20.3105C35.8486 20.3106 36.688 20.4776 37.4712 20.8021C38.2544 21.1266 38.966 21.6021 39.5655 22.2016C40.1649 22.8011 40.6403 23.5128 40.9647 24.2961C41.2891 25.0793 41.456 25.9188 41.4559 26.7665ZM35.0008 35.1318C33.1728 35.1297 31.3645 35.5086 29.6911 36.2443C28.0178 36.9801 26.5162 38.0566 25.2821 39.4051C23.1037 41.7785 23.6372 45.5543 26.3801 47.2441C28.9735 48.8367 31.9574 49.6797 35.0008 49.6797C38.0442 49.6797 41.0281 48.8367 43.6215 47.2441C46.3644 45.5543 46.8979 41.7785 44.7195 39.4051C43.4854 38.0566 41.9838 36.9801 40.3105 36.2443C38.6371 35.5086 36.8288 35.1297 35.0008 35.1318Z" fill="white" />
                <path d="M59.638 3.95692C59.4752 3.66585 59.2378 3.42346 58.9501 3.25474C58.6624 3.08602 58.335 2.99707 58.0015 2.99707C57.668 2.99707 57.3405 3.08602 57.0529 3.25474C56.7652 3.42346 56.5278 3.66585 56.365 3.95692L49.2355 16.7099C49.076 16.9952 48.9939 17.3172 48.9972 17.6439C49.0005 17.9707 49.0891 18.291 49.2544 18.5729C49.4196 18.8549 49.6557 19.0888 49.9391 19.2514C50.2226 19.414 50.5437 19.4996 50.8705 19.4999H65.1265C65.4534 19.4999 65.7747 19.4144 66.0584 19.2519C66.342 19.0894 66.5783 18.8556 66.7437 18.5736C66.9091 18.2916 66.9979 17.9712 67.0013 17.6443C67.0047 17.3174 66.9225 16.9953 66.763 16.7099L59.638 3.95692ZM59.125 15.3749C59.125 15.6733 59.0065 15.9594 58.7955 16.1704C58.5845 16.3814 58.2984 16.4999 58 16.4999C57.7016 16.4999 57.4155 16.3814 57.2045 16.1704C56.9935 15.9594 56.875 15.6733 56.875 15.3749C56.875 15.0766 56.9935 14.7904 57.2045 14.5794C57.4155 14.3685 57.7016 14.2499 58 14.2499C58.2984 14.2499 58.5845 14.3685 58.7955 14.5794C59.0065 14.7904 59.125 15.0766 59.125 15.3749ZM57.25 11.9999V8.24992C57.25 8.05101 57.329 7.86025 57.4697 7.71959C57.6103 7.57894 57.8011 7.49992 58 7.49992C58.1989 7.49992 58.3897 7.57894 58.5303 7.71959C58.671 7.86025 58.75 8.05101 58.75 8.24992V11.9999C58.75 12.1988 58.671 12.3896 58.5303 12.5303C58.3897 12.6709 58.1989 12.7499 58 12.7499C57.8011 12.7499 57.6103 12.6709 57.4697 12.5303C57.329 12.3896 57.25 12.1988 57.25 11.9999Z" fill="#FF604A" />
            </svg>
        )
        }
        </>

    )
}

export default DeleAccountIcon