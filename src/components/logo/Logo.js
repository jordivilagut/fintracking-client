import React from 'react';
import Badge from 'react-bootstrap/Badge';
import "./Logo.scss"

export const Logo = () => (
    <div className="logo">
        <div className="appTitle">
            <h1>Fintracking</h1><Badge variant="secondary">Beta</Badge>
        </div>
        <h4>Pocket finance advisor</h4>
    </div>
);
