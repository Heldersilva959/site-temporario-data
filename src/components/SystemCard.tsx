import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface SystemCardProps {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const SystemCard: React.FC<SystemCardProps> = ({ id, name, description, icon }) => {
  return (
    <div className="card group hover:-translate-y-2">
      <div className="p-6">
        <div className="text-primary-600 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={`/sistemas/${id}`}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Saiba mais <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default SystemCard;