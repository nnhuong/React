import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
class About extends Component {

    render() {
        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói gì về chúng tôi
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe
                            width="100%"
                            height="400px"
                            src="https://www.youtube.com/embed/iq0GMBGdnhc"
                            title="Bảo vệ da trong mùa hè | Bản tin Y tế 24h | VTV24| VTV24"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                    </div>
                    <div className="content-right">
                        <p>Mùa hè với chỉ số UV ngoài trời thường ở mức cao, bên cạnh đó cũng là mùa nhiều loại côn trùng hoạt động mạnh. Làm sao để chúng ta có thể bảo vệ da trước những tác nhân này?</p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
