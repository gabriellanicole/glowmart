import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';

export default function Logo({
  themeConfig: {
    logo: { src, alt = 'Evershop', width = '128px', height = '128px' }
  }
}) {
  return (
    <div className="logo md:ml-0 flex justify-center items-center">
      {src && (
        <a href="/" className="logo-icon">
          <img src={src} alt={alt} width={width} height={height} />
        </a>
      )}
      {!src && (
        <a href="/" className="logo-icon">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="500"
            version="1"
            viewBox="0 0 375 375"
          >
            <defs>
              <clipPath id="df374d4a22">
                <path d="M156 60h67v43h-67Zm0 0"></path>
              </clipPath>
              <clipPath id="d803023a9e">
                <path d="m159.945 137.363-21.5-89.562 77.504-18.606 21.504 89.563Zm0 0"></path>
              </clipPath>
              <clipPath id="e1d951765b">
                <path d="m204.89 337.176-69.464-289.36 420.261-100.89 69.465 289.363Zm0 0"></path>
              </clipPath>
              <clipPath id="9a22fc2718">
                <path d="M118 106h119v78H118Zm0 0"></path>
              </clipPath>
              <clipPath id="fc3010da89">
                <path d="m100.215 110.156 141.683-39.238 32.622 117.789-141.688 39.238Zm0 0"></path>
              </clipPath>
              <clipPath id="ca54ddca1d">
                <path d="M-185.012 41.5 204.195-66.29 360.68 498.75-28.531 606.535Zm0 0"></path>
              </clipPath>
              <clipPath id="9e7a32764f">
                <path d="M92 189h193v119H92Zm0 0"></path>
              </clipPath>
              <clipPath id="605f93a0c5">
                <path d="m229.434 83.059 119.379 198.976-203.536 122.113L25.898 205.172Zm0 0"></path>
              </clipPath>
              <clipPath id="e5cc2bd6ee">
                <path d="m780.535-600.305 438.336 730.598-1060.2 636.086L-279.663 35.78Zm0 0"></path>
              </clipPath>
            </defs>
            <path fill="#fff" d="M-37.5-37.5h450v450h-450z"></path>
            <path fill="#fff" d="M-37.5-37.5h450v450h-450z"></path>
            <g clipPath="url(#df374d4a22)">
              <g clipPath="url(#d803023a9e)">
                <g clipPath="url(#e1d951765b)">
                  <path
                    fill="#bb9d8c"
                    d="M193.39 60.398c34.438-3.336 41.188 33.813 7.274 40.063-5.34.98-10.578 1.656-15.61 1.93-.542.03-1.093.054-1.636.082-34.184 1.445-37.23-35.688-3.34-40.48a296 296 0 0 1 13.313-1.595"
                  ></path>
                </g>
              </g>
            </g>
            <g clipPath="url(#9a22fc2718)">
              <g clipPath="url(#fc3010da89)">
                <g clipPath="url(#ca54ddca1d)">
                  <path
                    fill="#c68c6d"
                    d="M160.73 179.004c-60.476-11.18-53.808-77.973 7.211-72.016 9.606.938 18.895 2.344 27.625 4.344.942.215 1.887.441 2.832.664 59.125 14.293 46.122 79.242-14.14 70.817a543 543 0 0 1-23.528-3.81"
                  ></path>
                </g>
              </g>
            </g>
            <g clipPath="url(#9e7a32764f)">
              <g clipPath="url(#605f93a0c5)">
                <g clipPath="url(#e5cc2bd6ee)">
                  <path
                    fill="#d6ab93"
                    d="M207.852 190.793c98.988 4.809 102.734 112.895 4.003 116.559-15.535.574-30.664.312-45.035-.985-1.562-.14-3.12-.3-4.668-.449-97.504-10.082-90.73-116.594 7.305-116.133a869 869 0 0 1 38.395 1.008"
                  ></path>
                </g>
              </g>
            </g>
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="500"
            height="500"
            version="1"
            viewBox="0 0 500 400"
          >
            <path fill="#FEFEFE" d="M0 0h428v432H0z"></path>
            <path
              fill="#CEAD97"
              d="M199.558 229.609c3.489.021 6.977.02 10.466.02 15.745 0 31.461.113 47.171 1.25l3.117.225c16.639 1.389 32.95 5.41 48.688 10.896l3.195 1.004C326.856 247.983 340.588 257.645 352 268l2.121 1.91c17.142 16.273 27.423 38.215 28.213 61.816.22 13.173-2.186 25.517-8.334 37.274l-1.27 2.598c-3.707 7.261-8.311 13.33-13.73 19.402l-2.309 2.598c-25.235 26.81-64.643 35.347-99.99 36.51-3.272.055-6.542.082-9.814.095l-3.641.021q-5.78.023-11.559.026l-3.98.005c-20.066.002-39.807-.583-59.707-3.255l-3.709-.484c-5.837-.792-11.519-1.605-17.166-3.329l-3.5-1.066L140 421q-1.936-.55-3.875-1.09c-10.002-2.859-19.01-6.92-28.125-11.91l-2.875-1.566c-6.2-3.556-11.65-7.858-17.125-12.434l-1.867-1.457C69.755 379.449 59.958 359.23 56 339c-.429-4.053-.526-8.051-.5-12.125l.02-3.287C55.959 304.025 63.298 286.83 76 272l1.383-1.781C86.585 258.65 100.026 250.669 113 244l2.547-1.313c8.174-3.963 16.691-6.434 25.453-8.687l2.173-.565c18.562-4.598 37.41-3.973 56.385-3.826"
            ></path>
            <path
              fill="#BD8E73"
              d="M170.927 87.815c2.236-.002 4.472-.02 6.708-.04 6.775-.027 13.28.086 19.908 1.661 2.931.673 5.865 1.122 8.84 1.564l3.347.5q3.406.502 6.813 1c5.93.888 11.668 1.94 17.457 3.5l2.95.676c22.365 5.2 42.74 16.26 56.05 35.324 2.275 3.898 4.272 7.831 6 12l1.129 2.66c3.268 12.53 2.402 28.076-4.129 39.34-2.438 3.886-5.069 7.473-8 11l-1.578 1.957c-11.707 13.097-31.841 19.09-48.82 20.2-15.505.608-30.477-1.145-45.618-4.387-2.855-.585-5.702-1.019-8.593-1.383-25.76-3.257-48.073-11.6-66.391-30.387l-1.82-1.758c-10.527-10.967-14.61-26.942-14.457-41.699.782-9.993 3.96-18.787 10.277-26.543l2-2.523c10.357-12.318 23.6-18.1 39-21.477l2.215-.528c5.506-.933 11.14-.658 16.712-.657"
            ></path>
            <path
              fill="#B69E8F"
              d="m259 13 2.684 1.32C270.162 18.93 275.738 24.858 279 34c1.254 7.524 1.296 15.908-2.562 22.625-1.668 2.3-1.668 2.3-3.438 4.375l-1.676 1.98c-1.685 1.818-3.427 3.426-5.324 5.02l-1.59 1.363c-16.173 11.846-47.187 14.114-66.48 11.168C187.327 77.994 177.074 73.348 171 64c-4.405-8.203-6.266-15.56-4-24.812 3.522-10.812 11.71-17.372 21.436-22.463 6.835-3.288 13.26-4.984 20.751-6.038l3.39-.492c14.95-2 32.52-4.29 46.423 2.805"
            ></path>
            <path
              fill="#C1A18E"
              d="M150 91c-.961.38-.961.38-1.941.77-9.342 3.498-9.342 3.498-18.059 8.23-2.187-.375-2.187-.375-4-1q3.309-1.694 6.625-3.375l1.871-.96C145.315 89.197 145.315 89.197 150 91"
            ></path>
            <path
              fill="#C0977F"
              d="M110 114h2c.313 2.75.313 2.75 0 6-2.375 2.375-2.375 2.375-5 4h-2c1.333-3.588 2.83-6.836 5-10"
            ></path>
            <path
              fill="#BD9B89"
              d="M227 95c6.485.737 12.692 2.353 19 4-3.654 1.268-6.49.757-10.25.063l-3.266-.59L230 98v-2z"
            ></path>
            <path fill="#BE9D8B" d="M179 212h16v2l2 1-18-2z"></path>
            <path
              fill="#F7EFE5"
              d="M376 362c1.246 3.5.789 5.29-.75 8.625l-1.047 2.352C373 375 373 375 370 377c1.599-5.196 3.741-10.066 6-15"
            ></path>
            <path
              fill="#BBAA9F"
              d="m175 26 3 2-1.937 1.313c-2.33 1.6-2.33 1.6-3.063 4.687h-2l-1 3-1-3c1.215-2.043 1.215-2.043 2.938-4.187l1.714-2.168z"
            ></path>
            <path fill="#F4EAE0" d="M209 91h13l1 3-14-2z"></path>
            <path
              fill="#D3B7AB"
              d="m79 268 1 4c-2.25 2.75-2.25 2.75-5 5h-3z"
            ></path>
            <path
              fill="#CDB7A7"
              d="m62 295 2 1c-.812 3.438-.812 3.438-2 7l-3 1z"
            ></path>
            <path
              fill="#BC9D89"
              d="M300 168h1c-.514 4.97-1.234 9.29-3 14-1.662-5.17.296-9.003 2-14"
            ></path>
            <path
              fill="#BF9D8A"
              d="M104 124c1.537 2.44 2.02 3.707 1.813 6.625C105 133 105 133 102 135c1-7.429 1-7.429 2-11"
            ></path>
          </svg>
          {/* <svg
            width="128"
            height="146"
            viewBox="0 0 128 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.388 18.0772L1.15175 36.1544L1.05206 72.5081L0.985596 108.895L32.4213 127.039C49.7009 137.008 63.9567 145.182 64.1228 145.182C64.289 145.182 72.8956 140.264 83.2966 134.283C93.6644 128.268 107.82 120.127 114.732 116.139L127.26 108.895V101.119V93.3102L126.529 93.7089C126.097 93.9415 111.941 102.083 95.06 111.853C78.1459 121.622 64.156 129.531 63.9567 129.498C63.724 129.431 52.5587 123.051 39.1005 115.275L14.6099 101.152V72.5746V43.9967L25.6756 37.6165C31.7234 34.1274 42.8223 27.7472 50.2991 23.4273C57.7426 19.1073 63.9899 15.585 64.1228 15.585C64.2557 15.585 72.9288 20.5362 83.3963 26.5841L113.902 43.9967L118.713 41.1657L127.26 36.1544L113.902 28.5447C103.334 22.2974 64.3554 -0.033191 64.0231 3.90721e-05C63.8237 3.90721e-05 49.568 8.14142 32.388 18.0772Z"
              fill="#1F1F1F"
            />
            <path
              d="M96.0237 54.1983C78.9434 64.0677 64.721 72.2423 64.4219 72.3088C64.0896 72.4084 55.7488 67.7562 44.8826 61.509L25.9082 50.543V58.4186L25.9414 66.2609L44.3841 76.8945C54.5193 82.743 63.1591 87.6611 63.5911 87.8272C64.2557 88.0598 68.9079 85.5011 95.5585 70.1156C112.705 60.1798 126.861 51.9719 127.027 51.839C127.16 51.7061 127.227 48.1505 127.194 43.9302L127.094 36.2541L96.0237 54.1983Z"
              fill="#1F1F1F"
            />
            <path
              d="M123.771 66.7261C121.943 67.7562 107.854 75.8976 92.4349 84.8033C77.0161 93.7089 64.289 100.986 64.1228 100.986C63.9567 100.986 55.3501 96.0683 44.9491 90.0869L26.0744 79.1874L25.9747 86.8303C25.9082 92.6788 26.0079 94.5729 26.307 94.872C26.9383 95.4369 63.7241 116.604 64.1228 116.604C64.4551 116.604 126.496 80.8821 127.027 80.4169C127.16 80.284 127.227 76.7284 127.194 72.4749L127.094 64.7987L123.771 66.7261Z"
              fill="#1F1F1F"
            />
          </svg> */}
        </a>
      )}
    </div>
  );
}

Logo.propTypes = {
  themeConfig: PropTypes.shape({
    logo: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      width: PropTypes.string,
      height: PropTypes.string
    })
  })
};

Logo.defaultProps = {
  themeConfig: {
    logo: {
      src: '',
      alt: 'Evershop',
      width: '128',
      height: '146'
    }
  }
};

export const layout = {
  areaId: 'header',
  sortOrder: 10
};

export const query = `
  query query {
    themeConfig {
      logo {
        src
        alt
        width
        height
      }
    }
  }
`;
